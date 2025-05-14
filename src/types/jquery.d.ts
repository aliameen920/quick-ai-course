
interface JQuery {
  noConflict(removeAll?: boolean): JQuery;
}

interface Window {
  jQuery: JQuery;
  fnames: Array<string>;
  ftypes: Array<string>;
  $mcj: JQuery;
}
