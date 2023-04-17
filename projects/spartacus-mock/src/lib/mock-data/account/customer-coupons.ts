export const customerCoupons = () => {
  return {
    coupons: [],
    pagination: {
      count: 10,
      hasNext: false,
      hasPrevious: false,
      page: 0,
      totalCount: 0,
      totalPages: 0
    },
    sorts: [
      {
        asc: true,
        code: "startdate"
      }
    ]
  };
}
