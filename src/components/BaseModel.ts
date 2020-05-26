class Contants {
  static PageSize = 20;
  static PageSizeOptions = [10, 20, 30, 50, 100];
}
class SortDirKey {
  static desc = 'DESC';
  static asc = 'ASC';
}

interface PageParams {
  page_size: number;
  page_no: number;
  count: number;
  rowno: number;
}

export class ParamsBody implements PageParams {
  page_size: number;
  page_no: number;
  sort?: string;
  sortDirKey?: string;
  search: Object | undefined | null;
  count: number;
  rowno: number;
  constructor(
    search?: Object | undefined | null,
    pageSize?: number,
    pageNo?: number,
    sort?: string,
    sortDir?: string,
  ) {
    this.page_no = pageNo || 1;
    this.page_size = pageSize || Contants.PageSize;
    if (sort) {
      this.sortDirKey = sortDir || SortDirKey.desc;
      this.sort = sort;
    }
    this.search = search || {};
    this.count = 0;
    this.rowno = this.count === 0 ? 0 : (this.page_no - 1) * this.page_size;
  }
}
