"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { WhoseWork } from "@/domains/whoseWork";

type Props = {
  whoseWork: WhoseWork;
};

export default function Page(props: Props) {
  const { whoseWork } = props;

  const maxIndex = Math.max(...whoseWork.correctAnswerCountDistribution);

  return (
    <div className="mx-auto h-[600px] max-w-[1200px] pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={getData(whoseWork)}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" id="CartesianGrid" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, maxIndex]} allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="인원 수" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
      <span className="mt-2 flex justify-center text-xl text-text-secondary">
        맞힌 개수
      </span>
    </div>
  );
}

const getData = (whoseWork: WhoseWork) => {
  return whoseWork.correctAnswerCountDistribution.map((item, index) => ({
    name: `${index}개`,
    "인원 수": item,
  }));
};
