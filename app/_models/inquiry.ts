// src/models/InquiryModel.ts

// User 타입 재사용
import UserModel, { UserDTO } from "./user";

// InquiryDTO 정의
export type InquiryDTO = {
  id: string;
  category: string;
  inquiryTitle: string;
  inquiryAuthor?: UserDTO; // Optional, User 타입 재사용
  inquiryContent: string;
  answerTitle: string;
  answerAuthor?: UserDTO; // Optional, User 타입 재사용
  answerContent: string;
  createdAt: string;
  isPublished: string;
  updatedAt: string;
  answeredAt: string;
  attachment: string;
};

// InquiryModel 정의
export default class InquiryModel {
  id: string;
  category: string;
  inquiryTitle: string;
  inquiryAuthor?: UserModel; // Optional
  inquiryContent: string;
  answerTitle: string;
  answerAuthor?: UserModel; // Optional
  answerContent: string;
  createdAt: Date;
  isPublished: string;
  updatedAt: Date;
  answeredAt: Date;
  attachment: string;

  constructor(
    id: string,
    category: string,
    inquiryTitle: string,
    inquiryAuthor: UserModel | undefined,
    inquiryContent: string,
    answerTitle: string,
    answerAuthor: UserModel | undefined,
    answerContent: string,
    createdAt: Date,
    isPublished: string,
    updatedAt: Date,
    answeredAt: Date,
    attachment: string
  ) {
    this.id = id;
    this.category = category;
    this.inquiryTitle = inquiryTitle;
    this.inquiryAuthor = inquiryAuthor;
    this.inquiryContent = inquiryContent;
    this.answerTitle = answerTitle;
    this.answerAuthor = answerAuthor;
    this.answerContent = answerContent;
    this.createdAt = createdAt;
    this.isPublished = isPublished;
    this.updatedAt = updatedAt;
    this.answeredAt = answeredAt;
    this.attachment = attachment;
  }

  // DTO에서 InquiryModel로 변환
  static fromJson(inquiryDTO: InquiryDTO): InquiryModel {
    return new InquiryModel(
      inquiryDTO.id,
      inquiryDTO.category,
      inquiryDTO.inquiryTitle,
      inquiryDTO.inquiryAuthor
        ? UserModel.fromJson(inquiryDTO.inquiryAuthor)
        : undefined,
      inquiryDTO.inquiryContent,
      inquiryDTO.answerTitle,
      inquiryDTO.answerAuthor
        ? UserModel.fromJson(inquiryDTO.answerAuthor)
        : undefined,
      inquiryDTO.answerContent,
      new Date(inquiryDTO.createdAt),
      inquiryDTO.isPublished,
      new Date(inquiryDTO.updatedAt),
      new Date(inquiryDTO.answeredAt),
      inquiryDTO.attachment
    );
  }

  // InquiryModel을 DTO로 변환
  toJson(): InquiryDTO {
    return {
      id: this.id,
      category: this.category,
      inquiryTitle: this.inquiryTitle,
      inquiryAuthor: this.inquiryAuthor
        ? this.inquiryAuthor.toJson()
        : undefined,
      inquiryContent: this.inquiryContent,
      answerTitle: this.answerTitle,
      answerAuthor: this.answerAuthor ? this.answerAuthor.toJson() : undefined,
      answerContent: this.answerContent,
      createdAt: this.createdAt.toISOString(),
      isPublished: this.isPublished,
      updatedAt: this.updatedAt.toISOString(),
      answeredAt: this.answeredAt.toISOString(),
      attachment: this.attachment,
    };
  }

  // 빈 인스턴스 반환
  static empty(): InquiryModel {
    return new InquiryModel(
      "",
      "",
      "",
      undefined, // Author는 Optional로 초기화되지 않음
      "",
      "",
      undefined, // Answer Author도 Optional
      "",
      new Date(),
      "",
      new Date(),
      new Date(),
      ""
    );
  }
}
