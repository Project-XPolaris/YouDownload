import apiRequest from "./request";

export const updateSetting = async (newSetting: any) => {
    return await apiRequest.post("/torrent/setting", {
        data: newSetting,
    });
}
