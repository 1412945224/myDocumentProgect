import service from "./axios";

export const getDiagram = (data: { currentPage: number; pageSize: number }) => {
  return service.post(
    "/apis/inquiry/PurchaseEnquiryRiskService/findPageList",
    data
  );
};
