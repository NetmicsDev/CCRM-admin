// Insurance.ts

export type InsuranceDTO = {
  id: string;
  category: string;
  insurerName: string;
  lecturer: string;
  insurerLogo: string;
  link: string;
  virtualFaxNumber: string;
  groupInsurance: string;
  createdAt: string;
  updatedAt: string;
  isPublished: string;
  orderNum: string;
};

export default class InsuranceModel {
  id: string;
  category: string;
  insurerName: string;
  lecturer: string;
  insurerLogo: string;
  link: string;
  virtualFaxNumber: string;
  groupInsurance: string;
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
    virtualFaxNumber: string,
    groupInsurance: string,
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
    this.virtualFaxNumber = virtualFaxNumber;
    this.groupInsurance = groupInsurance;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isPublished = isPublished;
    this.orderNum = orderNum;
  }

  static fromJson(dto: InsuranceDTO): InsuranceModel {
    return new InsuranceModel(
      dto.id,
      dto.category,
      dto.insurerName,
      dto.lecturer,
      dto.insurerLogo,
      dto.link,
      dto.virtualFaxNumber,
      dto.groupInsurance,
      new Date(dto.createdAt),
      new Date(dto.updatedAt),
      dto.isPublished,
      dto.orderNum
    );
  }

  toJson(): InsuranceDTO {
    return {
      id: this.id,
      category: this.category,
      insurerName: this.insurerName,
      lecturer: this.lecturer,
      insurerLogo: this.insurerLogo,
      link: this.link,
      virtualFaxNumber: this.virtualFaxNumber,
      groupInsurance: this.groupInsurance,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      isPublished: this.isPublished,
      orderNum: this.orderNum,
    };
  }

  static empty(): InsuranceModel {
    return new InsuranceModel(
      "",
      "",
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
