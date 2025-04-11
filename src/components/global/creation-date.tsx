"use client";
import moment from "moment";

const CreationDate = ({ articleNumber }: { articleNumber: number }) => {
  // Each group of 2 articles gets a date 2 days earlier than the previous group
  const groupOffset = Math.floor(articleNumber / 2);
  const daysToSubtract = groupOffset * 2;

  const date = moment().subtract(daysToSubtract, "days");

  return <span>{date.format("DD MMM YYYY")}</span>;
};

export default CreationDate;
