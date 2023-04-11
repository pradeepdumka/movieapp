import { AppEnvConfig } from "@models";
import { EnvConfigLocal,  } from "@configs";

export class EnvConfig{
    static setting:AppEnvConfig;
    loadEnvironments(){
        return new Promise((resolve)=>{
            let szHostName=window.location.hostname
            if(szHostName=='localhost'){
            EnvConfig.setting= <AppEnvConfig>EnvConfigLocal;    
            }
            resolve(true)
        })
    }
}