export enum RentalStatusEnum {
    ACTIVE = 0,      // Currently borrowed (was RENTED)
    RETURNED = 1,    // User marked returned, awaiting admin confirm
    COMPLETED = 2,   // Admin confirmed return
    CANCELLED = 3,   // Admin cancelled rental
}