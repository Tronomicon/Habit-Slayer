import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default function App() {
  return (
    
    <View style={styles.container}>

    <Slideshow
      dataSource={[
        { url: 'https://cdn.dribbble.com/users/1677926/screenshots/8855433/media/9668fcece593e5684a7b2ecbf916d87c.gif'}
      ]}
    />

    <Slideshow 
      dataSource={[
        { url:'https://lh3.googleusercontent.com/x6y6swtc2IkHFv62bNuNK2ZWali9vBFLvDKAFdY0z_80UUVVpjp72mbxuDBhQvcOdQbsBUksJ5XrrTYyQRfBajl3yDcc0CqSg-rMBusoTV4oRQaIHko5tI9KWQv0z5uzOg4-wQ5U8wY4aJY6kPxl6IRCBYxrRByGfMoYxuhBCbk587yUXxEZ2ASCu8o9XsKZKYVE8sxVg3oSMWbYmY7-NQQfJK9LKaFRDYnDLSvEEf1i1Jcx14sm1wwufdteyCssL3UWuz6GuVNlxWQqitOTKPUc3Mduqk6FDrm_8Tb0rkvW7gorfYhAQgYstan6ihnnaPF9QjiCFCV-PvXOxe3tAl1bk9V5oWhT8OXRiNvmzCfZAWYZlvVtre2YEQ-TkebWo0Kyf1CfiaRL30DkxDrgTods-mlbbubLGsxbcC4QvCAurveAjmQD1lhVzDNCOE7PTHLswWzfG2drq9hVn_-e1fhsHvVOVErKa5gpB4FxA6sx9AjhJ_KC2g0WzvT9YsAPpFsSTpS4TZazlde5ylJJsgNLach9HHATELX0w9vrHTyU7OYN7QB6EOqsaW2KH3G95GyF5tN2X6Ssug3wY6ljca-UhLu1LETaE5huCwBMkTIVNTNeasPnRG2oQ6j3cDS-jD0VwAgKlAD2Wirnjfiw0tLNqEKat6WzJ_vD1-t3_gQ26W8fpySvd7antbWTkab_rCZ-Sv30SlTNoC6gsAkKmBbr=w1696-h805-no?authuser=0' },
        { url: 'https://lh3.googleusercontent.com/NYXYef73x7xGF6u8iU1I6rXjf8E2YTzHi0xDL5zFr8IDa4zw__w6lOpqtV6NClCNnCYhZaZdeLYz5OUfHmic13ioQb444bRLVoYYP0aY1S9cBVg_MIr0ogtxFby1lrgvywOCsGUQc0bKntpCbx8xZzmjXqDTT9uvTtGBIaOFZWF8NjlO_tPdA8vfsHuhrBpAgQM-4T_O1oYNmxtB-HjMqxEStX9U8S0sMdZQ3fV03Vx4K2zkgIyN_07xXxBzV38ZHjEHOqYHuF_bekQetth0jlxtp6tBFfGuxy8sFxGgDegFR37kArOYpnNo_xFjshI9HRHFshfYK7NQ9sC5X7R7GdEf4PbG_eQ7B4ImKw0Dq1CXib_jHCVlEuWkzUy7084qCtz1uyrW1D_f5hwDm66jexlGuyux12EAfkFU7osV7kqq5TvhS92jlx60iB9EFNx6tknJkR6udV1rxKHrnNSu9LjDexYJOHydqRHqfr8z93YNVHMY5o8WqVFzGtsCd2_ecTWKt3lzhRg9VhDVezBGeX8rwjoDBfnuRindk-pzFJZm6MlX2ccLmmTTPiSGGJNcnFR0jhGjkMunL79NJs-EUobruHB7Liy8Tn25eg2L9iiwkDRzpFu3Kvgpu9e67lkqORqrLV54OkKjaYMTgKr3-IDPiKZgezLB1bT6H3Y888L_hJxYrb3aWAoC3WXLWgyVlYn7pgiZ9lIwquFC9IZ0cXIq=w1696-h805-no?authuser=0' },
        { url:'https://lh3.googleusercontent.com/Tsx_sEX_GdKKFzG7elkrSAQq7iG9QRhK-A_9R4JqO8ZHJheYQiU5BIc-1xPEL3SZS9QMTtckwiNi4YU9GkOge_bq6iLYzO0TPHIyK18GmFHzd5-IJredU6Tftvblp58_oi7kqczkHDKTK82J-bPHTcDCQnLlS1CHOWpO9w7ziYUA5z6uYTRiVe7pYdyDf2FHwfOozo-yek6O_fX8nFEJm7U_Eu_Cq3xbK-cqwqoaI3bTw3J46twcZyxV2toRY-K60fjnvIWnMixFrrN0wVcsIUzLEvlVnMA5h4CfIYV9KTl3HmVmWROhr-l1YxrZrdAiqi1IAh65eUmJEA2wPEgehNODDLOVtjEvCtbQtF1ss6ge_LbCtcxsPaUH1uOFKG0sv8EkdqfWdJbJo3FCFg0-V6q8nhwVbjP5kCEcZTFuZX4BG_qyBBRmHZE786Q5f5MRqx_Eg4NqsJ2LC5ExQYUCa4qoy-W_5fKcdZygBTaMQmNlIOltD_foRet3cwBUA9cKj5tjTkRa08Y9YKWCVtfKbEF4Dk9LjXJj0FglNiboOWNmA3OObZRDVDn_U7uaWpPdG7Yk32rJMVNIsJANMVx6Qjk-T8Ylk1_aoney4wAnZTvHYfxyFGnvxq4cGHEaIGUqy6gynD7mm9kpL2JsRy9mkuKkQDyT5AslVWzk-gb5xvknAUbp6zEXfDsFAepPmUEW6CQywWcuuKeFH87xPkwqyJ-a=w1696-h805-no?authuser=0' }
    ]}/>

      <Slideshow 
      dataSource={[
        { url:'https://lh3.googleusercontent.com/VIDmuxY-aelXwKjJCXF-SmVvtL5lVFnYMc7ScPXfM9ruVcfbTdNFbAbvMYSu2fy9ig38yc_2LTXz3aPHEBIcrbftzS4deLH7i2gISNM0G_gf7xVvPPSyECshc_Ic5h1D20A5RhQArXop9-wBO1B-UsEpYWE8gBmTQ6lwz8OiCaHdNkTBPQM8wjokmNotUyNzsujigFEJ6vYZOen5e0dYNSaN8RiH1gvpEKPasAySlqcYLJOmq1-2PtD2nN36wNCLj_xA3lX3imbxWtqAVMupR4PEgTG4yHaw0Ih9ViG5j3LhYwXOfF4DixXBpTq2yhF2LJsLSOumKnRU6h3ZWUTeIGLYszS9LvmL4oJ7knH7X82u6EUac3-ncQh4uKXIxQhSUI5XfRd_yoeaBmBvLkMFayegQ3gP5TXhUyPP6d8XrXqfUBzJa85TiKLeqdzwcMLtG1YuIzwA3nqBkpsiiZmD4fujcberntH2tpKwJK6N_yfob4qagrddvbRgSae5HGJBCbrVM1rkLY4b4J-shs_gESA7djAZVA757TMgHjxzgth-q8D8mJAvp_R86BrjCyq7sJTOTtxmzU-b4eYSDy6sYkYfPJ3ckCjDIpex0jKfPmHJAhAOaaj71JGIn_z7YhorQJLSSUxfmf0PLijF6kuqNMmapIi1cfg21SD0FHcFe2fCCEEpr4gs0fir3JOliz6AUj2fyVvQ9e0rXaFhMnxjOLHT=w766-h287-no?authuser=0' },
        { url:'https://www.gvaat.com/wp-content/uploads/2020/05/Drawing_of_torso_front_view.gif' },
        { url:'https://image.shutterstock.com/image-vector/hand-drawn-illustration-male-torso-260nw-1547820788.jpg' }
    ]}/>

      <Slideshow 
      dataSource={[
        { url:'https://lh3.googleusercontent.com/xzvH7wY_kWdGVthimMhzm6d_IZFxLQqs14lHrBheS3taR6YcB_UTO774-5NrCKylQxMbHbglf__L2SFAUOWis5fKtE5sdqtnd6wLvW4Cbjg3chdNsSgQBSRdlFPC4sKfMs7rdNN3EdGMymVQEx493P4q35X2Vr2dTWYnUw9M6qKMEODJdC-pV2dNcJsaIdrTHRYkQbo9iFbx4fDSpxIDtXWEc7O5LeAd_KR8yGEFWd5rNQ-T_Bgwg_kSXA7O3aMBYh9WYD408XNnUMvp4WuLuD2RGXweqrzAEPROvg4o_fUN3fWTeBT0IbfwvoEo_cTM4IhiKQiCxnq_fttZn28ssBBfoAh8MOVZ7Zw4aDQj47g2s1Nm2fxrUzDebr_v_PZlfnl6PelZAhpZ5zomXQbQfrSWnQWmQ89bUZ1y118plrId_HXFJm6VDXFwpAx6_PXBUv9ixfsAeN74m9oyrjysWU91rDjK-kWLDEwBTDg4yGhscs7XGjnHENiSZOeSQbs8p03AkfHfZRu9GmB5Bue4N-ZllB8N6VLpLv9fdNiRUVtFTeuZxmIpwyEeosJPiyM6Br3-VxXm4nDOX0PI_QGH3DWtSfHW49mxTtNsEm38G_J0oyMMV8nsh5iq7GzosO1PpE2u04aani6dpKzmgbc5FoeiP395jENJK0wmN3bhQ5Xl6-sMBuKN1Vu-FCKXKak7Nrq8nYnUEdxtNpi0EJWHa38V=w1920-h741-no?authuser=0' },
        { url:'https://image.shutterstock.com/image-illustration/cartoon-legs-260nw-171774005.jpg' },
        { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdiZOaKhs939jqPVb2lNCsxdBgzcszB3grtVBdnTjZYZJDCCuFnrAQ0Go0I3e6InsR8s&usqp=CAU' }
      ]}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});

