"use client";
import React, { useEffect, useState } from "react";
import { MenuProvider } from "../../../components/MenuContext";
import NativeBar from "../../../components/NativeBar";
import styles from "./index.module.scss";
import ListItem from "./components/ListItem";
import { Tabs } from "antd";
import axios from "axios";
import { getContract2 } from "../../../public/utils";
import { eth } from "../../../abi/ethabi";

const Personal = () => {
  const [switchItem, setSwitch] = useState("0");
  const [list, setList] = useState([]);
  const [listexamine, setListexamine] = useState([]);
  const [NodestorageData, setNodestorageData] = useState<any>({});

  const getDetil = async () => {
    try {
      const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
      const result = await contract.getAllPendingWithdrawalRequests();
      setListexamine(result);
    } catch (error) {
      console.error("Error fetching withdrawal requests:", error);
    }
  };

  const getWallet = async () => {
    const url = "https://app.myoilfield.org/api/wallet/getWallet";
    try {
      const response = await axios.get(url);
      setList(response.data.result);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  const TabItems = [
    {
      label: "授权",
      key: "0",
    },
    {
      label: "审核",
      key: "1",
    },
  ];

  useEffect(() => {
    setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ''))
    getWallet();
    getDetil();
  }, [switchItem]);

  const handleTabChange = (key: string) => {
    setSwitch(key);

    if (key === "0") {
      getWallet();
    } else if (key === "1") {
      getDetil();
    }
  };

  return (
    <MenuProvider>
      <NativeBar title="管理员" backUrl="/HomeLess" />
      <Tabs
        tabBarStyle={{
          padding: "0 24px",
          fontSize: "18px",
          border: "none",
          margin: 0,
        }}
        className={styles.Tabs}
        items={TabItems}
        onChange={handleTabChange}
      />
      {<ListItem Data={list} switchItem={switchItem} listexamine={listexamine} />}
    </MenuProvider>
  );
};

export default Personal;