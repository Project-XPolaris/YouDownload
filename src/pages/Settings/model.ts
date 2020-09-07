import { useState } from "react";
import { createModel } from "hox";
import { getSetting } from "../../api/torrent";
import { ConfigEntity } from "../../api/entites/ConfigEntity";
import { updateSetting } from "../../api/setting";

export interface SettingField {
    defaultValue: any
    value: any
    key: string
    type: string
    title: string
}
function useSettingsModel() {
    const [active, setActive] = useState<"proxy" | "connection" | "folder" | "tracker">("proxy")
    const [settingFields, setSettingFields] = useState<{ [key: string]: Array<SettingField> }>({
        proxy: []
    })
    const refreshSetting = async () => {
        const config: ConfigEntity = await getSetting()
        setSettingFields({
            proxy: [
                {
                    key: "UseSocksproxy",
                    defaultValue: config.UseSocksproxy,
                    value: config.UseSocksproxy ?? false,
                    type: "switch",
                    title: "使用Socks代理",
                },
                {
                    key: "SocksProxyURL",
                    defaultValue: config.SocksProxyURL,
                    value: config.SocksProxyURL ?? "",
                    type: "text",
                    title: "Socks代理URL",
                },
            ],
            connection: [
                {
                    key: "MaxEstablishedConns",
                    defaultValue: config.MaxEstablishedConns,
                    value: config.MaxEstablishedConns ?? 100,
                    type: "text",
                    title: "最大连接数",
                },
                {
                    key: "DisableIPv4",
                    defaultValue: config.DisableIPv4,
                    value: config.DisableIPv4 ?? false,
                    type: "switch",
                    title: "关闭IPV4",
                },
                {
                    key: "DisableIPv6",
                    defaultValue: config.DisableIPv6,
                    value: config.DisableIPv6 ?? false,
                    type: "switch",
                    title: "关闭IPV6",
                }
            ],
            folder:[
                {
                    key: "Tmpdir",
                    defaultValue: config.Tmpdir,
                    value: config.Tmpdir ?? "",
                    type: "text",
                    title: "临时文件夹",
                },
                {
                    key: "DataDir",
                    defaultValue: config.DataDir,
                    value: config.DataDir ?? "",
                    type: "text",
                    title: "下载文件夹",
                },
            ],
            tracker:[
                {
                    key: "EnableDefaultTrackers",
                    defaultValue: config.EnableDefaultTrackers,
                    value: config.EnableDefaultTrackers ?? true,
                    type: "switch",
                    title: "使用默认Tracker",
                },
                {
                    key: "DefaultTrackerList",
                    defaultValue: config.DefaultTrackerList,
                    value: config.DefaultTrackerList ?? "",
                    type: "text",
                    title: "默认Tracker来源",
                },
            ]
        })
    }
    const updateValue = (group: string, key: string, value: any) => {
        console.log({ group, key, value })
        const settingGroup = settingFields[group]
        if (settingGroup === undefined) {
            return
        }
        const targetField = settingGroup.find(it => it.key === key)
        if (targetField === undefined) {
            return
        }

        setSettingFields({
            ...settingFields,
            [group]: [
                ...settingGroup.map(it => {
                    if (it.key === key) {
                        return {
                            ...it,
                            value: value
                        }
                    }
                    return {
                        ...it
                    }
                })

            ]
        })
    }
    const applySetting  = async () => {
        const newConfig : any = {}
        Object.getOwnPropertyNames(settingFields).forEach(group => {
            settingFields[group].forEach(field => {
                newConfig[field.key] = field.value
            })
        })
        await updateSetting(newConfig)
        refreshSetting()
    }
    return {
        active,
        setActive,
        refreshSetting,
        settingFields,
        updateValue,
        applySetting
    };
}

export default createModel(useSettingsModel);
