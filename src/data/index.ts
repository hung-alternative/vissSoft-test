type LAN = {
  id: number;
  name: string;
  status: boolean;
};

export type BoxType = {
  id: number;
  name: string;
  status: boolean;
  lan: LAN[];
};

export const boxes: BoxType[] = [
  {
    id: 1,
    name: "box1",
    status: true,
    lan: [
      {
        id: 1,
        name: "lan1",
        status: true,
      },
      {
        id: 2,
        name: "lan2",
        status: false,
      },
    ],
  },
  {
    id: 2,
    name: "box2",
    status: false,
    lan: [
      {
        id: 3,
        name: "lan3",
        status: true,
      },
      {
        id: 4,
        name: "lan4",
        status: false,
      },
    ],
  },
];

export type Account = {
  id: number;
  name: string;
  totalBalance: number;
};

export const account: Account = {
  id: 1,
  name: "admin",
  totalBalance: 1000000,
};
