import type { BillStatus, SessionType } from "@ojpp/db";

export function mapBillStatus(status: string): BillStatus {
  switch (status) {
    case "成立":
      return "ENACTED";
    case "衆議院で可決":
    case "衆議院可決":
      return "PASSED_LOWER";
    case "参議院で可決":
    case "参議院可決":
      return "PASSED_UPPER";
    case "審議中":
    case "委員会":
    case "委員会審議中":
    case "本会議審議中":
      return "COMMITTEE";
    case "本会議":
      return "PLENARY";
    case "否決":
    case "廃案":
    case "審議未了":
      return "REJECTED";
    case "撤回":
      return "WITHDRAWN";
    case "提出":
      return "SUBMITTED";
    default:
      return "SUBMITTED";
  }
}

export function mapSessionType(type: string): SessionType {
  switch (type) {
    case "通常":
    case "通常国会":
    case "常会":
      return "ORDINARY";
    case "臨時":
    case "臨時国会":
    case "臨時会":
      return "EXTRAORDINARY";
    case "特別":
    case "特別国会":
    case "特別会":
      return "SPECIAL";
    default:
      return "ORDINARY";
  }
}
