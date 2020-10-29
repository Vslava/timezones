type ClassNameParamObject = {
  [string]: boolean,
};

type ClassNameParam = string | ClassNameParamObject;

declare module 'classnames' {
  function classNames(...params: ClassNameParam[]): string;
  export default classNames;
}
