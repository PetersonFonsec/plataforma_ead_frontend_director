export interface IMenu {
  label: string;
  link: string;
};

const STUDENT: IMenu[] = [
  { label: 'Pefil', link: 'profile' },
  { label: 'Avaliações', link: 'assessments' },
  { label: 'Materias', link: 'assessments' },
  { label: 'Atividades', link: 'task' },
  { label: 'Publicações', link: 'feed' },
];

const TEACHER: IMenu[] = [
  { label: 'Pefil', link: 'profile' },
  { label: 'Avaliações', link: 'assessments' },
  { label: 'Materias', link: 'assessments' },
  { label: 'Atividades', link: 'task' },
  { label: 'Publicações', link: 'feed' },
];

const DIRECTOR: IMenu[] = [
  { label: 'Pefil', link: 'profile' },
  { label: 'Escolas', link: 'list-college' },
  { label: 'Publicações', link: 'feed' },
];

const INSTITUTIONAL: IMenu[] = [
  { label: 'Perguntas Frequentes', link: 'faq' },
  { label: 'Quem somos', link: 'about' },
  { label: 'Ajuda', link: 'suport' }
];

export const menus = {
  STUDENT,
  TEACHER,
  DIRECTOR,
  INSTITUTIONAL
};
