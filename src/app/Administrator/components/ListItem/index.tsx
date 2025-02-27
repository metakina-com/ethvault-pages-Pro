"use client";
import React, { useState, useEffect } from "react";
import { Button, Input, Form, List, Row, Col, Empty, message } from "antd";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei, getContract2, getTokenBalance } from "../../../../../public/utils";
import { copyToClipboard } from "../../../../../public/clipboard";
import { eth } from "../../../../../abi/ethabi";
import { useActiveAccount } from "thirdweb/react";

interface Props {
  Data?: Array<any>;
  listexamine?: Array<any>;
  switchItem: any;
}

const ListItem = ({ Data = [], switchItem, listexamine = [] }: Props) => {
  const [NodestorageData, setNodestorageData] = useState<any>();
  const account: any = useActiveAccount();
  const [num, setNum] = useState("");
  const [list, setlist] = useState<any>([]);
  const [language, setLanguage] = useState("EN");


  //获取用户余额
  const getUserBalance = async (NodestorageData: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    for (let i = 0; i < Data.length; i++) {
      const balance = await contract.getTokenBalance(NodestorageData.BUSDaddress, Data[i].walletAddress)
      Data[i].realBalance = formatWei(balance)
    }
    setlist(Data)
  }
  const btnFun = async (id: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.approveWithdrawal(id);
  };
  const btnFun2 = async (id: any) => {
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const result = await contract.rejectWithdrawal(id);
  };

  const drawp2 = async () => {
    if (!num) {
      message.warning(language == "EN" ? 'Please enter your wallet address' : '请输入钱包地址')
      return
    }
    const contract: any = await getContract2(NodestorageData.ETHAddress, eth);
    const res = await contract.adminWithdrawUser(num);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    getUserBalance(JSON.parse(localStorage.getItem("Nodestorage") || ""))
  }, [Data]);
  useEffect(() => {
    setNodestorageData(JSON.parse(localStorage.getItem("Nodestorage") || ""));
  }, []);
  return (
    <div className={styles.Content}>
      {switchItem == "0" ? (
        <div>
          {/* 授权 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "30%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'address' : '地址'}
            </div>
            <div style={{ width: "50%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'balance(USDT)' : '余额(USDT)'}
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'Time' : '时间'}
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {list.length > 0 ? (
              <div
                id="scrollableDiv"
                style={{
                  height: "100vh",
                  overflow: "auto",
                  padding: "0 5px",
                  fontSize: "18px",
                  color: "#FFFFFF",
                }}
              >
                <List
                  dataSource={list}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont}>
                        <div
                          style={{
                            width: "30%",
                            textDecorationLine: "underline",
                            color: "#00ffaf",
                          }}
                          onClick={() => copyToClipboard(item.walletAddress)}
                        >
                          {item.walletAddress.slice(0, 4)}...
                          {item.walletAddress.slice(-4)}
                        </div>
                        <div style={{ width: "50%" }}>
                          {Number(item.realBalance).toFixed(3)}
                        </div>
                        <div style={{ width: "20%" }}>
                          {formatTimestamp(item.createTime / 1000)}
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty
                description={<span style={{ color: "#FFFFFF" }}>{language == "EN" ? 'No data available' : '暂无数据'}</span>}
              />
            )}
          </div>
          <div>{language == "EN" ? 'Slide load more' : '下滑加载更多'}</div>
        </div>
      ) : switchItem == "1" ? (
        <div>
          {/* 审核 Tab 内容 */}
          <div className={styles.ComputingPower}>
            <div style={{ width: "45%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'address' : '地址'}
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'Withdrawal amount' : '提现金额'}
            </div>
            <div style={{ width: "40%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'Type' : '类型'}
            </div>
            <div style={{ width: "20%" }} className={styles.AmountReceived}>
              {language == "EN" ? 'Controls' : '操作'}
            </div>
          </div>
          <div className={styles.CustomerInformation}>
            {listexamine.length > 0 ? (
              <div
                id="scrollableDiv"
                style={{
                  height: "100vh",
                  overflow: "auto",
                  padding: "0 5px",
                  fontSize: "18px",
                  color: "#FFFFFF",
          
                }}
              >
                <List
                  dataSource={listexamine}
                  renderItem={(item: any, index: number) => (
                    <List.Item key={index}>
                      <div className={styles.ComputingPowercont} style={{
                                display:"flex",
                  alignItems:"center"
                      }}>
                        <div
                          className={styles.walletAddress}
                          onClick={() => copyToClipboard(item.walletAddress)}
                        >
                          {item.user.replace(/^(.{4}).*(.{4})$/, "$1...$2")}
                        </div>
                        <div className={styles.amount}>
                          {Number(formatWei(item.amount)).toFixed(3)}
                        </div>
                        <div className={styles.principal}>
                          {item.isPrincipal ? language == "EN" ? 'principal' : '本金' : language == "EN" ? 'Interest' : '利息'}
                        </div>
                        <div style={{
                          display:"flex",
                          flexDirection:"column"
                        }} className={styles.buttonContainer}>
                          <Button
                          style={{
                            marginBottom:"5px"
                          }}
                            type="primary"
                            onClick={() => btnFun(item["id"])}
                          >
                            {language == "EN" ? 'pass' : '放行'}
                          </Button>
                          <Button
                            type="primary"
                            onClick={() => btnFun2(item["id"])}
                          >
                            {language == "EN" ? 'reject' : '拒绝'}
                          </Button>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
              </div>
            ) : (
              <Empty
                description={<span style={{ color: "#FFFFFF" }}>{language == "EN" ? 'No data available' : '暂无数据'}</span>}
              />
            )}
          </div>
        </div>
      ) : (
        <Row style={{ marginTop: 80 }}>
          <Input
            placeholder={language == "EN" ? 'Please enter the address of the transferred wallet' : "请输入划转的钱包地址"}
            className={styles.inputstyle}
            value={num}
            onChange={(e: any) => {
              setNum(e.target.value);
            }}
          />
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.buttonstyle}
                onClick={drawp2}
              >
                {language == "EN" ? 'transfer' : '划转'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ListItem;
