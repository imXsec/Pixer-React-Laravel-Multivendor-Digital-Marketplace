import Coupon from '@repositories/coupon';
import { useMutation } from 'react-query';
import { API_ENDPOINTS } from '@utils/api/endpoints';

export type VerifyCouponInputType = {
  code: string;
};

export const useVerifyCouponMutation = () => {
  return useMutation((variables: VerifyCouponInputType) =>
    Coupon.verify(API_ENDPOINTS.COUPONS, variables)
  );
};
