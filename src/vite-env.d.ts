
/// <reference types="vite/client" />

interface JQuery {
  noConflict(removeAll?: boolean): JQuery;
}

interface Window {
  jQuery: JQuery;
  $: JQuery;
  fnames: string[];
  ftypes: string[];
  $mcj: JQuery;
}
