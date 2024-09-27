// Term.ts

export type TermDTO = {
  id: string;
  category: string;
  insurerName: string;
  lecturer: string;
  insurerLogo: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  isPublished: string;
  orderNum: string;
};

export default class TermModel {
  id: string;
  category: string;
  insurerName: string;
  lecturer: string;
  insurerLogo: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  isPublished: string;
  orderNum: string;

  constructor(
    id: string,
    category: string,
    insurerName: string,
    lecturer: string,
    insurerLogo: string,
    link: string,
    createdAt: Date,
    updatedAt: Date,
    isPublished: string,
    orderNum: string
  ) {
    this.id = id;
    this.category = category;
    this.insurerName = insurerName;
    this.lecturer = lecturer;
    this.insurerLogo = insurerLogo;
    this.link = link;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isPublished = isPublished;
    this.orderNum = orderNum;
  }

  static fromJson(dto: TermDTO): TermModel {
    return new TermModel(
      dto.id,
      dto.category,
      dto.insurerName,
      dto.lecturer,
      dto.insurerLogo,
      dto.link,
      new Date(dto.createdAt),
      new Date(dto.updatedAt),
      dto.isPublished,
      dto.orderNum
    );
  }

  toJson(): TermDTO {
    return {
      id: this.id,
      category: this.category,
      insurerName: this.insurerName,
      lecturer: this.lecturer,
      insurerLogo: this.insurerLogo,
      link: this.link,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      isPublished: this.isPublished,
      orderNum: this.orderNum,
    };
  }

  static empty(): TermModel {
    return new TermModel(
      "",
      "",
      "",
      "",
      "",
      "",
      new Date(),
      new Date(),
      "",
      ""
    );
  }
}
