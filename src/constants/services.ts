import {
  SHADER_CONFIG_HALO,
  SHADER_CONFIG_MANDARIN,
  SHADER_CONFIG_SUNSET,
  SHADER_CONFIG_VIOLA,
  SHADER_CONFIG_NIGHTY_NIGHT,
  SHADER_CONFIG_INTERSTELLA,
} from './shader'
import * as m from '@/paraglide/messages'

export function getServices() {
  return [
    {
      title: m.service_web_design_title(),
      description: m.service_web_design_description(),
      detail: m.service_web_design_detail(),
      shaderProps: { ...SHADER_CONFIG_HALO },
    },
    {
      title: m.service_ai_integration_title(),
      description: m.service_ai_integration_description(),
      detail: m.service_ai_integration_detail(),
      shaderProps: { ...SHADER_CONFIG_MANDARIN },
    },
    {
      title: m.service_web_dev_title(),
      description: m.service_web_dev_description(),
      detail: m.service_web_dev_detail(),
      shaderProps: { ...SHADER_CONFIG_SUNSET },
    },
    {
      title: m.service_conversion_title(),
      description: m.service_conversion_description(),
      detail: m.service_conversion_detail(),
      shaderProps: { ...SHADER_CONFIG_INTERSTELLA },
    },
    {
      title: m.service_support_title(),
      description: m.service_support_description(),
      detail: m.service_support_detail(),
      shaderProps: { ...SHADER_CONFIG_VIOLA },
    },
    {
      title: m.service_ai_education_title(),
      description: m.service_ai_education_description(),
      detail: m.service_ai_education_detail(),
      shaderProps: { ...SHADER_CONFIG_NIGHTY_NIGHT },
    },
  ]
}
