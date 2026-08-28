import { IUser } from "../user";
import { IGoods } from "./goods.type";
import { RentalStatusEnum } from "../../enums/rental.enum";

// Table: rental
export interface IRental {
    id: number;
    userId: number;
    goodsId: number;
    count: number;
    timeBorrow: number;
    timeDue: number;
    timeReturn: number;
    timeConfirm: number;
    certName: string;
    groupName: string | null;
    contact: string | null;
    emergencyContact: string | null;
    usingLocation: string | null;
    usingPurpose: string | null;
    approverId: number | null;
    returnApproverId: number | null;
    overdueContactedAt: number;
    overdueContactedById: number | null;
    status: RentalStatusEnum;
}

export type IRentalAll = IRental & {
    user: IUser;
    goods: IGoods;
    approver: IUser | null;
    returnApprover: IUser | null;
    overdueContactedBy: IUser | null;
};

export type IRentalCreateAdmin = Pick<
    IRental,
    "userId" | "goodsId" | "count" | "timeDue" | "groupName" | "contact" | "emergencyContact" | "usingLocation" | "usingPurpose"
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
