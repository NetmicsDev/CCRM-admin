export type NoticeDTO = {
  id: string;
  category: string;
  title: string;
  content: string;
  isPublished: string;
  createdAt: string;
  updatedAt: string;
  attachment: string;
};

export default class NoticeModel {
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

  // DTO에서 NoticeModel로 변환
  static fromJson(noticeDTO: NoticeDTO): NoticeModel {
    return new NoticeModel(
      noticeDTO.id,
      noticeDTO.category,
      noticeDTO.title,
      noticeDTO.content,
      noticeDTO.isPublished,
      new Date(noticeDTO.createdAt), // string -> Date 변환
      new Date(noticeDTO.updatedAt), // string -> Date 변환
      noticeDTO.attachment
    );
  }

  // NoticeModel을 DTO로 변환
  toJson(): NoticeDTO {
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
  static empty(): NoticeModel {
    return new NoticeModel("", "", "", "", "", new Date(), new Date(), "");
  }
}
