// src/models/FaqModel.ts

// DTO 정의
export type FaqDTO = {
  id: string;
  category: string;
  title: string;
  content: string;
  isPublished: string;
  createdAt: string;
  updatedAt: string;
  attachment: string;
};

// Model 정의
export default class FaqModel {
  id: string;
  category: string;
  title: string;
  content: string;
  isPublished: string;
  createdAt: Date;
  updatedAt: Date;
  attachment: string;

  constructor(
    id: string,
    category: string,
    title: string,
    content: string,
    isPublished: string,
    createdAt: Date,
    updatedAt: Date,
    attachment: string
  ) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.content = content;
    this.isPublished = isPublished;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.attachment = attachment;
  }

  // DTO에서 FaqModel로 변환
  static fromJson(faqDTO: FaqDTO): FaqModel {
    return new FaqModel(
      faqDTO.id,
      faqDTO.category,
      faqDTO.title,
      faqDTO.content,
      faqDTO.isPublished,
      new Date(faqDTO.createdAt), // string -> Date 변환
      new Date(faqDTO.updatedAt), // string -> Date 변환
      faqDTO.attachment
    );
  }

  // FaqModel을 DTO로 변환
  toJson(): FaqDTO {
    return {
      id: this.id,
      category: this.category,
      title: this.title,
      content: this.content,
      isPublished: this.isPublished,
      createdAt: this.createdAt.toISOString(), // Date -> string 변환
      updatedAt: this.updatedAt.toISOString(), // Date -> string 변환
      attachment: this.attachment,
    };
  }

  // 빈 인스턴스 반환
  static empty(): FaqModel {
    return new FaqModel("", "", "", "", "", new Date(), new Date(), "");
  }
}
