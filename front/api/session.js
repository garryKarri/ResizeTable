/* eslint-disable consistent-return */
import { API_URL, SESSION_URL } from "@/config/url";
import ky from "ky-universal";
import Cookies from "universal-cookie";

const createError = (error) => {
  const { status, statusText, payload } = error.response;

  const customError = new Error(statusText);
  customError.status = status;
  customError.body = payload || {};

  return customError;
};

const getSession = async (context) => {
  const cookies = new Cookies(
    context.req.headers.cookie ? context.req.headers.cookie : null
  );
  const token = cookies.get("auth-token");

  const serverApi = ky.extend({
    hooks: {
      // cteate hook beforeRequest
      beforeRequest: [
        (request) => {
          request.headers.set("Authorization", `Bearer ${token}`); // set 'Authorization' header with token
          request.headers.set("Client-Platform", "Web"); //  set 'Client-Platform' header
        },
      ],
      //  cteate hook afterResponse
      afterResponse: [
        async (_request, _options, response) => {
          if (response.status === 401 || response.status === 400) {
            // if we have authorization error with status code 401 and 400
            response.payload = await response.json(); // we trying reading response in json format
            return response;
          }
        },
      ],
    },
  });

  try {
    const result = await serverApi
      .get(`${SESSION_URL}${API_URL}/users/me`)
      .json();
    // const result = await serverApi.get(`http://localhost:3000/fake-token.json`).json(); // для обращения за юзером к себе же
    // console.log(result);
    return {
      user: result,
      token,
    };
  } catch (error) {
    console.log("SESSION ERROR");

    // console.log('error instanceof ky.HTTPError', error instanceof ky.HTTPError)
    // console.log('error instanceof ky.TimeoutError', error instanceof ky.TimeoutError)

    context.res.writeHead(302, {
      Location: "/login",
    });
    context.res.end();

    if (error instanceof ky.TimeoutError) {
      // TODO: re-work
      throw new Error("TimeOut Error");
    }

    const { response } = error;

    if (!response) {
      throw createError(
        new ky.HTTPError({
          status: 500,
          statusText: "Server internal error",
        })
      );
    }

    throw createError(error);
  }
};

const withSession = (getServerSidePropsFunc) => {
  // Возвращаем функцию, которая будет использована как getServerSideProps
  return async (context) => {
    // const session = { user: {}, token: "abc" }; // создание пустой сессии
    // return { props: { session, data: { props: { session } } } }; // возвращаем props
    const session = await getSession(context);

    if (!session) {
      return { props: {} };
    }

    if (getServerSidePropsFunc) {
      const result = await getServerSidePropsFunc(context, session);

      return {
        props: {
          session,
          ...result,
        },
      };
    }

    // TODO: what is data props session ???
    return {
      props: {
        session,
        data: { props: { session } },
      },
    };
  };
};

export default withSession;
