export interface GetProfileRequest {
  id: string
}

export interface GetProfileResponse {
  email: string,
  name: string,
  role: string,
  id: number
}

export interface UpdateProfileRequest {
  documentNumber?: string,
  celphone?: string,
  avatar?: string,
  email?: string,
  name?: string,
  id: string
}

export interface UpdateProfileResponse extends GetProfileResponse {
}
