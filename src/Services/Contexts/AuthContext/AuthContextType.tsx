/**
 * Developed by: Inatel Competence Center
 * Copyright 2021, Prática
 * Author: Digital Endeavors
 * All rights are reserved. Reproduction in whole or part is
 * prohibited without the written consent of the copyright owner.
 */

export interface AuthContextType {
    viewType: ViewType,
}

export enum ViewType {
    WEB = "web",
    MOBILE = "mobile"
}