/* eslint-disable require-jsdoc */
// This is a translation layer, to convert all field names coming/going to BE from spanish to english.
// Ideally, this one should be the only file with spanish named variables in the entire project.

export const carreersUrl = () => {
  return '/obtener-carreras';
};

export const carreersResponse = (response) => {
  const data = response.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const subjectsUrl = () => {
  return '/obtener-materias';
};

export const subjectsParams = ({ carreer }) => {
  return { carrera: carreer };
};

export const subjectsResponse = (response) => {
  const data = response.materias.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const coursesUrl = () => {
  return '/obtener-cursos';
};

export const coursesParams = ({ subject }) => {
  return { materia: subject };
};

export const coursesResponse = (response) => {
  const data = response.cursos.map(({ nombre, id }) => {
    return { name: nombre, id: id };
  });
  return data;
};

export const courseInfoUrl = () => {
  return '/obtener-info-de-catedra';
};

export const courseInfoParams = ({ course }) => {
  return { curso: course };
};

export const courseInfoResponse = (response) => {
  const data = {
    mean: response.promedio,
    ...(response.resenia_propia && {
      own_review: {
        year: response.resenia_propia.anio,
        content: response.resenia_propia.contenido,
        rate: response.resenia_propia.calificacion,
        id: response.resenia_propia.id,
      },
    }),
    reviews: response.resenias.map(({ anio, contenido, calificacion, id }) => {
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
