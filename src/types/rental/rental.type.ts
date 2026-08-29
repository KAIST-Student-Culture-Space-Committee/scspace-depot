import { IUser } from "../user";
import { IGoods } from "./goods.type";
import { RentalStatusEnum } from "../../enums/rental.enum";
import { IOrganization } from "../organization";

// Table: rental
export interface IRental {
    id: number;
    userId: number;
    organizationId: number;
    rentalWorkerId: number;
    returnWorkerId: number | null;
    goodsId: number;
    count: number;
    timeBorrow: number;
    timeDue: number;
    timeReturn: number;
    certName: string;
    phoneNumber: string;
    emergencyContactPresident: string;
    emergencyContactVicePresident: string;
    reasonLocation: string;
    reasonPurpose: string;
    overdueContactedAt: number;
    overdueContactedById: number | null;
    status: RentalStatusEnum;
}

export type IRentalAll = IRental & {
    user: IUser;
    organization: IOrganization;
    goods: IGoods;
    rentalWorker: IUser;
    returnWorker: IUser | null;
    overdueContactedBy: IUser | null;
};

export type IRentalCreateAdmin = Pick<
    IRental,
    "userId" | "organizationId" | "goodsId" | "count" | "timeDue" | "phoneNumber" | "emergencyContactPresident" | "emergencyContactVicePresident" | "reasonLocation" | "reasonPurpose"
>;

export type IRentalUpdateAdmin = Partial<IRentalCreateAdmin>;

/**
 * @deprecated Use IRentalCreateAdmin for admin creation instead
 */
export type IRentalCreate = Pick<
    IRental,
    "userId" | "goodsId" | "count" | "timeBorrow" | "timeDue"
>;

// 대여 가능 여부 체크
export type IGoodsAvailabilityCheck = {
    goodsId: number;
    count: number;
    timeBorrow: number;
    timeDue: number;
};

// 사용자 대여 현황 조회
export type IUserRentalStatus = {
    userId: number;
    isActive?: boolean; // true면 현재 대여중인 것만, false면 모든 대여 기록
    limit?: number;
    offset?: number;
};
