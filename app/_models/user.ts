export type UserDTO = {
  id: string;
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
  createdAt: string;
  subscriptionStatus: string;
};

export default class UserModel {
  id: string;
  name: string;
  email: string;
  username: string;
  phoneNumber: string;
  createdAt: string;
  subscriptionStatus: string;

  constructor(
    id: string,
    name: string,
    email: string,
    username: string,
    phoneNumber: string,
    createdAt: string,
    subscriptionStatus: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.phoneNumber = phoneNumber;
    this.createdAt = createdAt;
    this.subscriptionStatus = subscriptionStatus;
  }

  // DTO 데이터를 받아 Model로 변환
  static fromJson(userDTO: UserDTO): UserModel {
    return new UserModel(
      userDTO.id,
      userDTO.name,
      userDTO.email,
      userDTO.username,
      userDTO.phoneNumber,
      userDTO.createdAt,
      userDTO.subscriptionStatus
    );
  }

  // Model 데이터를 DTO로 변환
  toJson(): UserDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      username: this.username,
      phoneNumber: this.phoneNumber,
      createdAt: this.createdAt,
      subscriptionStatus: this.subscriptionStatus,
    };
  }
}
