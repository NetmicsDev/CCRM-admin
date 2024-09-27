import UserModel, { UserDTO } from "./user";

export type CourseDTO = {
  id: string;
  title: string;
  lecturer: string;
  category: string;
  author?: UserDTO;
  createdAt: string;
  updatedAt: string;
  isPublished: string;
  layoutOrder: string;
  url: string;
  attachment: string;
};

class CourseModel {
  id: string;
  title: string;
  lecturer: string;
  category: string;
  author?: UserModel; // Optional field
  createdAt: Date;
  updatedAt: Date;
  isPublished: string;
  layoutOrder: string;
  url: string;
  attachment: string;

  constructor(
    id: string,
    title: string,
    lecturer: string,
    category: string,
    author: UserModel | undefined,
    createdAt: Date,
    updatedAt: Date,
    isPublished: string,
    layoutOrder: string,
    url: string,
    attachment: string
  ) {
    this.id = id;
    this.title = title;
    this.lecturer = lecturer;
    this.category = category;
    this.author = author;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isPublished = isPublished;
    this.layoutOrder = layoutOrder;
    this.url = url;
    this.attachment = attachment;
  }

  static tableColumns = [
    { label: "NO.", key: "id" },
    { label: "제목", key: "title" },
    { label: "강사명", key: "lecturer" },
    { label: "카테고리", key: "category" },
    { label: "업데이트 날짜", key: "updatedAt" },
    { label: "레이아웃 위치", key: "layoutOrder" },
    { label: "공개/비공개", key: "isPublished" },
    { label: "", key: "actions" },
  ];

  // DTO에서 CourseModel로 변환
  static fromJson(courseDTO: CourseDTO): CourseModel {
    return new CourseModel(
      courseDTO.id,
      courseDTO.title,
      courseDTO.lecturer,
      courseDTO.category,
      courseDTO.author ? UserModel.fromJson(courseDTO.author) : undefined, // Optional 처리
      new Date(courseDTO.createdAt),
      new Date(courseDTO.updatedAt),
      courseDTO.isPublished,
      courseDTO.layoutOrder,
      courseDTO.url,
      courseDTO.attachment
    );
  }

  // CourseModel을 DTO로 변환
  toJson(): CourseDTO {
    return {
      id: this.id,
      title: this.title,
      lecturer: this.lecturer,
      category: this.category,
      author: this.author ? this.author.toJson() : undefined, // Optional 처리
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      isPublished: this.isPublished,
      layoutOrder: this.layoutOrder,
      url: this.url,
      attachment: this.attachment,
    };
  }

  static empty(): CourseModel {
    return new CourseModel(
      "",
      "",
      "",
      "",
      undefined, // Author는 초기화되지 않음
      new Date(),
      new Date(),
      "false",
      "0",
      "",
      ""
    );
  }
}

export default CourseModel;
