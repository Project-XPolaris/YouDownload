import { useState } from 'react'
import { createModel } from 'hox'

export interface SettingField {
    defaultValue: any
    value: any
    key: string
    type: string
    title: string
}
function useSettingsModel () {
  const [active, setActive] = useState<'app'>('app')
  const [settingFields, setSettingFields] = useState<{ [key: string]: Array<SettingField> }>({
    proxy: []
  })
  const refreshSetting = async () => {
    setSettingFields({})
  }
  const updateValue = (group: string, key: string, value: any) => {
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
  const applySetting = async () => {
    const newConfig : any = {}
    Object.getOwnPropertyNames(settingFields).forEach(group => {
      settingFields[group].forEach(field => {
        newConfig[field.key] = field.value
      })
    })
    // await updateSetting(newConfig)
    // refreshSetting()
  }
  return {
    active,
    setActive,
    refreshSetting,
    settingFields,
    updateValue,
    applySetting
  }
}

export default createModel(useSettingsModel)
