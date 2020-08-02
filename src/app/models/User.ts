export interface User {
    firstName: string,
    lastName: string,
    companyName: string,
    email?: string,
    phoneNumber?: number,
    title?: string,
    about?: string,
    image?: {
        profileImage?: string,
        image1?: string,
        image2?: string,
        image3?: string,
        image4?: string,
        image5?: string,
        image6?: string
    }
}