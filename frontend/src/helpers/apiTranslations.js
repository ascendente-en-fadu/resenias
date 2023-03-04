/* eslint-disable require-jsdoc */
// This is a translation layer, to convert all field names coming/going to BE from spanish to english.
// Ideally, this one should be the only file with spanish named variables in the entire project.

export const careersUrl = () => {
  return '/carreras/';
};

export const careersResponse = (response) => {
  const data = response?.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const subjectsUrl = () => {
  return '/materias/';
};

export const subjectsParams = ({ career }) => {
  return { carrera: career };
};

export const subjectsResponse = (response) => {
  const data = response?.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const coursesUrl = () => {
  return '/catedras/';
};

export const coursesParams = ({ subject }) => {
  return { materia: subject };
};

export const coursesResponse = (response) => {
  const data = response?.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const reviewsUrl = () => {
  return '/resenias/';
};

export const ownReviewUrl = () => {
  return '/resenia-propia/';
};

export const courseInfoParams = ({ course }) => {
  return { catedra: course };
};

export const courseInfoResponse = (reviewsData, ownReviewData) => {
  const data = {
    ...(ownReviewData &&
      Object.keys(ownReviewData).length !== 0 && {
        own_review: {
          year: ownReviewData.anio,
          content: ownReviewData.contenido,
          rate: ownReviewData.calificacion,
          id: ownReviewData.id,
        },
      }),
    reviews: reviewsData?.map(({ anio, contenido, calificacion, id }) => {
      return {
        year: anio,
        content: contenido,
        rate: calificacion,
        id: id,
      };
    }),
  };
  return data;
};

export const sendReviewUrl = () => {
  return '/resenias/';
};

export const sendReviewBody = ({ review }) => {
  return {
    anio: review.year,
    contenido: review.content,
    calificacion: review.rate,
    catedra: review.course,
  };
};

export const deleteReviewUrl = (id) => {
  return `/resenias/${id}/`;
};

export const loginUrl = () => {
  return '/login';
};

export const loginBody = ({ access_token }) => {
  return {
    token: access_token,
  };
};

export const loginResponse = (response) => {
  return response.session_id;
};
