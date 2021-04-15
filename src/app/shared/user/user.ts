export interface User {
    uid: string,
    email?: string,
    displayName?: string,
    photoUrl?: string,
    emailVerified?: boolean,
    slackId?: string,
}

export interface FbUser extends firebase.default.User {
    slackId?: string,
    firstName?: string,
    lastName?: string,
    firstSemester?: string,
    reviewFeedback?: {[key: string]: boolean}
}