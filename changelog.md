---
sidebar_position: 1
---

# v0.4.6

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.6)

## Changes

## Changes

- Regression fix assitant extension codesign @hiento09 (#1918)
- Release cut 0.4.6 @louis-jan (#1888)
- feat: add factory reset feature @namchuai (#1750)
- chore: add react developer tools to electron @Helloyunho (#1858)
- Sync Release 0.4.5 to dev @louis-jan (#1830)

## 🚀 Features

- feat: integrate umami @hieu-jan (#1809)
- feat: Add default value for ngl @hiro-v (#1886)
- feat: add start/stop model via http api @namchuai (#1862)
- feat: add snackbar component and update style side banner @urmauur (#1874)
- feat: move open app directory into icon folder @urmauur (#1879)
- chore: Bump nitro to 0.3.3 @hiro-v (#1877)
- feat: put timestamp under thread name in left panel @urmauur (#1820)
- perf: remove unnecessary rerender when user typing input @namchuai (#1818)

## 🐛 Fixes

- fix: umami analytics send app loaded event @louis-jan (#1928)
- fix: migration loading indicator @louis-jan (#1913)
- fix: broken manual import model with NA fields @louis-jan (#1912)
- fix: openAIEmbedding now requires top level API Key configuration @louis-jan (#1902)
- fix: load model fail overlays thread message error @louis-jan (#1901)
- fix: show generate response on message send @louis-jan (#1895)
- fix: display error message on model load fail @louis-jan (#1894)
- fix: the selected model auto revert back to previous used model with setting mismatch @louis-jan (#1883)
- fix: add dialog confirm when move folder and next dest isn't empty @urmauur (#1880)
- Increase timeout for explore.e2e.spec test @hiento09 (#1844)
- chore: Bump nitro to 0.3.3 @hiro-v (#1877)
- fix: auto collapse retrieval setting while update config @urmauur (#1866)
- fix: loader show while error global when change folder @urmauur (#1870)
- fix: retrieval always ask for api key @louis-jan (#1856)
- fix: all input text box are disabled @namchuai (#1855)
- fix: add loader when user change folder @urmauur (#1850)
- Add code sign step for darwin assistant extension @hiento09 (#1841)
- fix: preserve focused thread when navigating in jan app @namchuai (#1814)
- fix: highlight menu dropdown server options @urmauur (#1831)

## 🧰 Maintenance

- chore: mark RAG as experimental feature @louis-jan (#1882)
- Increase timeout for explore.e2e.spec test @hiento09 (#1844)
- chore: Bump nitro to 0.3.3 @hiro-v (#1877)
- chore: Jan Data Folder setting is no longer an experimental feature @louis-jan (#1847)
- chore: resolve main conflict @louis-jan (#1833)
- Update release url on README to default branch instead of main branch @hiento09 (#1832)

## Contributor

@Helloyunho, @hiento09, @hieu-jan, @hiro-v, @jan-service-account, @louis-jan, @namchuai, @urmauur and James


# v0.4.5

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.5)

## Changes

## Changes

- fix(Wording): #1758 correct text for windows @namchuai (#1768)
- fix(Log): server log is not display in windows @namchuai (#1764)
- Release Cut v0.4.5 @louis-jan (#1752)
- chore(nitro): 0.2.11 -> 0.2.12 @hiro-v (#1754)
- fix: Nitro CPU threads with correct physical/ performance CPU count @hiro-v (#1726)
- fix(Model): #1662 imported model does not use gpu @namchuai (#1723)
- fix(API): #1720 host/port provided in the local API server does not fully applied @namchuai (#1721)
- fix: server API reference @hiro-v (#1670)
- fix(Model): refactor model label @namchuai (#1596)
- docs/postmortem v 0.4.4 @hieu-jan (#1617)
- chore(ShortcutModal): clean up shortcut modal @namchuai (#1614)
- chore(Dependencies): upgrade node-fetch to fix vulnerable issue @namchuai (#1598)

## 🚀 Features

- feat: update UI allow user change folder @urmauur (#1738)
- feat: error message when not enough RAM @urmauur (#1706)
- feat: improvement ux for local api server @urmauur (#1704)
- feat: allow user to move jan folder @namchuai (#1649)
- feat: HTTP proxy support @markmehere (#1562)
- Feature add schedule clean cloudflare page and r2 @hiento09 (#1653)
- feat: relayout left panel setting page @urmauur (#1648)
- Update CI follow git flow @hiento09 (#1625)
- feat: Implement UI page API server dashboard @urmauur (#1636)
- fix: #1545 long thread title @lucido-simon (#1605)

## 🐛 Fixes

- fix: model selection does not show in API settings page @louis-jan (#1828)
- fix: user can't view model setting in local api server @namchuai (#1807)
- fix: cannot change jan data folder @namchuai (#1805)
- fix: model selection does not show in API settings page @louis-jan (#1802)
- fix: user can't use a model in model hub @namchuai (#1801)
- fix: stop openai inference raises something amiss @louis-jan (#1799)
- regression fix: input disabled darkmode @urmauur (#1800)
- fix: clean last message when user clean thread message @namchuai (#1793)
- fix: app log not being printed @namchuai (#1790)
- fix: api settings are not applied on changes @louis-jan (#1789)
- fix: could not delete model @louis-jan (#1779)
- fix: can not start model when server is not enabled from model settings page @louis-jan (#1774)
- regression fix: input port not accept alphabets @urmauur (#1772)
- Correct bash script syntax in ci @hiento09 (#1769)
- Hotfix CI pre-release not trigger  @hiento09 (#1757)
- fix: bring back open app directory @louis-jan (#1756)
- fix: input port have range validation @urmauur (#1741)
- Fix error nightly build schedule run failed @hiento09 (#1736)
- fix: active model when start server @urmauur (#1719)
- fix: Change to fixed `localhost` instead of using host variable @hiro-v (#1729)
- Fix autoupdater nightly build error @hiento09 (#1727)
- Correct download url readme @hiento09 (#1724)
- fix: API chat/completion is blocked by CORS @louis-jan (#1705)
- fix: Jan server - v1/chat/completions is throwing ERR\_REQUIRE\_ESM @louis-jan (#1703)
- fix: Jan server is showing blank page @louis-jan (#1702)
- fix: switching loader from remote to local model from thread right panel @urmauur (#1692)
- fix: hot-fix algolia search @hieu-jan (#1700)
- fix: disable api key field while server is running @urmauur (#1694)
- fix: stoping model show starting model @urmauur (#1693)
- fix bug #1650 hogging resources @hiento09 (#1663)
- fix: auto select text when collapse panel @urmauur (#1645)
- fix: wrong selected model ref @louis-jan (#1638)
- fix: enable check for update on all supported platforms @louis-jan (#1626)
- fix: correct footer @hieu-jan (#1628)

## 🧰 Maintenance

- Docs publish to github page trigger on push to docs branch @hiento09 (#1783)
- Correct bash script syntax in ci @hiento09 (#1769)
- Combine 2 ci pipeline pre-release and nightly into one @hiento09 (#1767)
- Hotfix CI pre-release not trigger  @hiento09 (#1757)
- Fix error nightly build schedule run failed @hiento09 (#1736)
- docs: add troubleshoot unexpected token @hieu-jan (#1711)
- docs: fix about pages @0xSage (#1699)
- refactor: deprecate extension type implementation @louis-jan (#1677)
- refactor: file prefix replace utils \& add unit test @louis-jan (#1676)
- Correct ref branch for update url on README.md file @hiento09 (#1672)
- docs: update 02-somethings-amiss @hieu-jan (#1668)
- Cherrypick cicd to main branch to apply new gitflow @hiento09 (#1665)
- docs: add user and developer guides for extensions @hieu-jan (#1657)
- docs: add QA Script @hieu-jan (#1660)
- chore: Bump nitro to 0.2.11 @hiro-v (#1655)
- chore: Bump version nitro to 0.2.10 @hiro-v (#1644)
- docs: add antivirus compatibility testing @hieu-jan (#1641)
- refactor: introduce node module in nitro extension @louis-jan (#1630)
- Update 02-somethings-amiss.mdx @Ssstars (#1634)
- docs: add integration AzureOpenAI @hieu-jan (#1632)
- docs: add troubleshooting permission denied @hieu-jan (#1631)

## Contributor

@0xSage, @Ssstars, @hiento09, @hientominh, @hieu-jan, @hiro-v, @jan-service-account, @louis-jan, @lucido-simon, @markmehere, @namchuai and @urmauur


# v0.4.4

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.4)

## Changes

## Changes

- Update 2023-11-05-hello-world.md @Ssstars (#1587)
- fix(API): #1511 update swagger page @namchuai (#1572)
- fix(Thread): #1212 thread.json not created when user change thread settings @namchuai (#1570)
- fix(Thread): #1336 not allow creating too many unfinished thread @namchuai (#1538)
- Update 01-how-to-get-involved-and-FAQ.mdx @Ssstars (#1555)
- Update 01-how-to-get-involved-and-FAQ.mdx @Ssstars (#1553)
- Update 02-embracing-pod-structure.mdx @Ssstars (#1550)
- Update 01-how-we-hire.mdx @Ssstars (#1551)
- Update 01-how-we-hire.mdx @Ssstars (#1524)
- fix(InferenceExtension): #1067 sync the nitro process state @namchuai (#1493)
- fix(Messages): #1434 create message via api does not display on app correctly @namchuai (#1479)
- Docs for the Integration of Continue and Jan in VSCode @0xgokuz (#1467)
- Chore: Update model.json for UI @hahuyhoang411 (#1448)
- Docs for Installing Models from Hub @0xgokuz (#1450)
- Update about.md @Ssstars (#1436)
- feat(UI): #1404 make left side bar collapsible by hot key @namchuai (#1420)
- docs: Typo in 06-hardware.md @akaMrNagar (#1408)
- fix(API): #1409 fix wrong prefix for threads api @namchuai (#1410)
- Update model hub @hahuyhoang411 (#1383)
- fix(Model): remove unsupported default model setting params @namchuai (#1382)
- fix(trinity): update cover  path for trinity v1.2 @hahuyhoang411 (#1380)
- Chore/update model hub @hahuyhoang411 (#1342)
- Update about.md @Ssstars (#1359)
- fix(JanHub): #1158 sort model list @namchuai (#1257)
- fix(Message): open link with external browser @namchuai (#1339)
- feat(Model): #1028 made model.json optional @namchuai (#1314)
- docs: Update onboarding.md @Diane0111 (#1293)
- fix: clean resource on exit @louis-jan (#1290)
- fix: posthog configuration @hieu-jan (#1283)
- docs: update README.md @eltociear (#1277)
- Enable scrolling in the message chat box @Gri-ffin (#1280)
- chore: Update README.md @sr-albert (#1263)
- Adding new model to the Hub @hahuyhoang411 (#1213)
- Feature GPU detection for Jan on Windows and Linux @hiento09 (#1242)
- fix(Thread): #1168 fix newly created thread cannot select model after restart @namchuai (#1176)

## 🚀 Features

- feat: add compatibility tag to model selection in right panel @urmauur (#1552)
- Feature integrate antivirus scanner to ci @hiento09 (#1529)
- feat: [hub] update compatibility tags colors @urmauur (#1516)
- feat: hub recommendation labels @urmauur (#1440)
- Feature linux support app image format @hiento09 (#1442)
- fix: render external links @urmauur (#1441)
- fix: add icon collapsible left panel and update keyboard shortcut page @urmauur (#1439)
- feat(UI): update UI footer @urmauur (#1424)
- Fix Bug for Chat Reply Goes off Screen @mishrababhishek (#1393)
- feat: move social media from left panel into footer @urmauur (#1325)
- feat: implementation new UI thread settings @urmauur (#1301)
- Bring social media links @Gri-ffin (#1295)
- feat: added keyboard shortcut list in setting page @urmauur (#1275)
- feat: add swagger /docs to localhost:1337 @louis-jan (#1268)
- feat: update posthog configuration @hieu-jan (#1258)
- feat: Deprecate model.json ready state in favor of .download ext @louis-jan (#1238)
- feat: add engine settings @namchuai (#1199)
- feat: users should be able to switch models mid-thread @louis-jan (#1226)
- feat: temporary link how to import model @urmauur (#1209)

## 🐛 Fixes

- fix: #1594 - Model settings - change thread model - go back does not see according settings @louis-jan (#1595)
- fix: #1548 - duplicate command shortcut instruction @louis-jan (#1600)
- fix: switch model caused app crash @louis-jan (#1597)
- fix: #1559 Inference Parameters displayed on new thread with Openai GPT Model @louis-jan (#1588)
- fix: enable user set value manually model setting from input @urmauur (#1585)
- fix: #1569 - Does not apply thread settings when loading model @louis-jan (#1576)
- fix: could not change model params settings @louis-jan (#1547)
- fix: gpu check module export does not work in extension @louis-jan (#1536)
- fix: adjust calculation hub labels using total RAM instead remaining RAM @urmauur (#1522)
- Feature integrate antivirus scanner to ci @hiento09 (#1529)
- fix: allow users to set max tokens variably  @urmauur (#1513)
- fix: stop word update @louis-jan (#1457)
- Revert nitro to 0.2.6 @hiento09 (#1491)
- fix: enable text selection codeblock @urmauur (#1466)
- fix: suppress all main node JS error message dialog @louis-jan (#1460)
- Correct AppImage path @hiento09 (#1446)
- fix: render external links @urmauur (#1441)
- fix: add icon collapsible left panel and update keyboard shortcut page @urmauur (#1439)
- fix: GET /models does not work due to new default model dir @louis-jan (#1392)
- fix: model migration stopped working @louis-jan (#1378)
- fix: wrong condition for displaying error message @louis-jan (#1376)
- fix: show hide section engine params @urmauur (#1374)
- fix: copy stream tooltip and hide section when no params setting @urmauur (#1373)
- bugs: fix stop streaming when user delete or clean thread @urmauur (#1347)
- fix: show a proper error message on download failure @louis-jan (#1345)
- Add detect cuda version jan app @hiento09 (#1351)
- fix: Error occurred: Unexpected token "d", "data: ..." is not a valid JSON @louis-jan (#1332)
- fix: app getting stuck at downloading 99% while downloading model @louis-jan (#1320)
- correct type utf-8 @hiento09 (#1311)
- Fix memory on mac included cached and swap @hiento09 (#1298)
- fix: should check app dir before spawning log @louis-jan (#1297)
- fix: disable process logging from server @louis-jan (#1296)
- fix: user should be able to access Swagger docs from localhost:1337 @louis-jan (#1292)
- Switch from Gigabyte to Gibibyte - System monitor @hiento09 (#1286)
- Switch from systeminformation to os-utils to resolve Bitdefender false positive and memory leak issue @hiento09 (#1282)
- fix: swagger CSP issue @louis-jan (#1284)
- fix: support markdown break line @urmauur (#1274)
- fix ci test run failed @hiento09 (#1267)
- Fix wrong linux nitro path @hiento09 (#1266)
- fix: enable command enter on dialog confirmation clean thread @urmauur (#1261)
- fix: input message duplicated due with some input sources @louis-jan (#1259)
- fix: mac users should not see GPU settings @louis-jan (#1255)
- fix: remove redundant gpu detection prompt event @louis-jan (#1254)
- fix: engine settings GUI - feature toggle @louis-jan (#1252)
- Fix bug #1178 high ram on windows @hiento09 (#1241)
- fix: #1183 Reveal in finder does not work on windows @namchuai (#1239)
- fix: remove delay tooltip and click event @urmauur (#1217)
- fix: enable enter command on dialog confirmation delete thread @urmauur (#1218)
- fix: Cleared thread last message is not updated @louis-jan (#1225)
- Fix switch thread crash nitro windows linux @hiento09 (#1214)
- fix: darkmode broken color @urmauur (#1186)

## 🧰 Maintenance

- chore: typo model.json @louis-jan (#1599)
- docs: add 04-how-to-get-error-logs.mdx @hieu-jan (#1580)
- chore: teach how to attach logs @0xSage (#1578)
- chore: issues should auto close with PRs through template @0xSage (#1577)
- chore: Update issue templates @0xSage (#1568)
- docs: fix x handles @0xSage (#1532)
- Docs to integrate OpenRouter with Jan without UI/UX @0xgokuz (#1495)
- chore: fix darkmode docs @hieu-jan (#1520)
- docs: fix algolia configuration @hieu-jan (#1518)
- docs: fix algolia configuration @hieu-jan (#1517)
- Revert URL release in readme to version 0.4.3 @hiento09 (#1502)
- refactor: add app and nitro log - resolve dependencies issue @louis-jan (#1447)
- chore: enable agolia @hieu-jan (#1497)
- docs: update troubleshooting and redirects old pages @hieu-jan (#1492)
- docs: minor fix @hieu-jan (#1478)
- docs: initial handbook structure @hieu-jan (#1477)
- Bump nitro to 0.2.8 and change Jan App to support cuda >= 11.7 @hiento09 (#1476)
- Chore update docs jan - add AppImage instruction to docusaurus @hiento09 (#1480)
- Bump nitro to 0.2.7 @hiento09 (#1474)
- chore: error message update @louis-jan (#1473)
- docs: Update 02-import-manually.mdx @0xSage (#1469)
- docs: Update about.md @0xSage (#1465)
- Bump nitro version to 0.2.6 @hiento09 (#1458)
- docs: adding customize engine settings @hieu-jan (#1455)
- docs: add-missing-path @hieu-jan (#1454)
- docs: resize gif  @hieu-jan (#1453)
- docs: revenue philosophy @0xSage (#1443)
- docs: jan framework principles @0xSage (#1438)
- docs: fix typo in docs @hieu-jan (#1419)
- chore: clean up use os hook @namchuai (#1418)
- docs: explain each docs page intent @0xSage (#1417)
- docs: Update 01-server.md @0xSage (#1416)
- Update warning url from github md file to jan.ai docs site @hiento09 (#1414)
- docs: improve gpu not used guide @hieu-jan (#1405)
- chore: update README.md @eltociear (#1406)
- Update USAGE docs for linux @hiento09 (#1401)
- docs: gpu not detected @0xSage (#1399)
- docs: Troubleshoot Failed To Fetch @gabrielle-ong (#1398)
- docs: improve docs syntax  @hieu-jan (#1394)
- docs: add-install-nightly-guide @hieu-jan (#1390)
- docs: correct href link @hieu-jan (#1338)
- docs: fix chat payload and cURL @hieu-jan (#1360)
- docs: add Chatting Guide @hieu-jan (#1184)
- Chore add docs usage how to switch run mode jan app @hiento09 (#1353)
- docs: configure index page @hieu-jan (#1330)
- docs: Update product.md @0xSage (#1326)
- docs: Update 01-server.md @0xSage (#1327)
- refactor: deprecate the appVersion IPC and use the predefined VERSION @louis-jan (#1309)
- docs: update using models documentation @hieu-jan (#1288)
- docs: update pm handbook @0xSage (#1307)
- docs: contributor docs overview @0xSage (#1305)
- chore: github PR template @0xSage (#1304)
- Fix memory on mac included cached and swap @hiento09 (#1298)
- Enrich discord message for nightly build url @hiento09 (#1294)
- Refactor CI by create shared jobs output @hiento09 (#1287)
- docs: update README.md @hieu-jan (#1281)
- docs: Update README.md @0xSage (#1248)
- feat: Jan Server, API and decoupled clients @louis-jan (#948)
- docs: improve 02-import-manually @hieu-jan (#1222)
- chore: Update issue templates @0xSage (#1229)
- docs: Update 02-import-manually.mdx @0xSage (#1197)
- add sleep 500ms if platform is windows before starting nitro process @hiento09 (#1215)
- docs: improve troubleshoot documentation @hieu-jan (#1173)
- docs: update bug report template @hieu-jan (#1180)
- docs: add troubleshooting @hieu-jan (#1169)
- chore: copy fixes @0xSage (#1167)
- docs: Update 01-start-thread.md @0xSage (#1122)

## Contributor

@0xSage, @0xgokuz, @Diane0111, @Gri-ffin, @Ssstars, @akaMrNagar, @eltociear, @gabrielle-ong, @hahuyhoang411, @hiento09, @hieu-jan, @jan-service-account, @louis-jan, @mishrababhishek, @namchuai, @sr-albert, @urmauur and Abhishek Mishra


# v0.4.3

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.3)

## Changes

## Changes

- Hotfix Prompt template for models on the Hub @hahuyhoang411 (#1159)
- Update model list for new release @hahuyhoang411 (#1143)
- fix(Thread): #1119 focus on the first thread to prevent blank chat screen @namchuai (#1127)
- fix(Thread): #1064 message being added to wrong thread if switching thread @namchuai (#1108)
- fix(Thread): #1042 allow create new thread by clicking Use in Jan Hub @namchuai (#1103)
- feat(ModelSetting): #1065 update state of model setting between threads @namchuai (#1090)
- Update model version @hahuyhoang411 (#1086)
- fix: cache hallucinations and failed to load model due to race condition @louis-jan (#1071)
- fix(thread): #1043 default model to prefer active model @namchuai (#1070)
- Update issue templates @0xSage (#1058)
- Update ctx\_len and max\_tokens @hahuyhoang411 (#1035)

## 🚀 Features

- feat: Add codeQL analysis for push main and pr main @hiro-v (#1128)
- Feature autoupdater for nightly build @hiento09 (#1068)
- feat: copy button for code block @urmauur (#1062)
- Enhancements to Dependency Installation and App Testing @hiento09 (#965)

## 🐛 Fixes

- fix: error road map url @hieu-jan (#1153)
- Fix token speed slow in machine has multi gpus @hiento09 (#1157)
- fix: added dialog confirmation clean thread @urmauur (#1142)
- fix: remove remote model from shortcut models dialog @urmauur (#1124)
- fix: ui issue - all models are activated @louis-jan (#1120)
- fix: should not hide empty message away @louis-jan (#1116)
- fix: added tooltip for user cannot change model after starting thread @urmauur (#1115)
- fix: remote model always active badges @urmauur (#1113)
- fix: handle chat completion state with enter button @louis-jan (#1114)
- fix: model active indicator only show when model activated @urmauur (#1110)
- fix: #1096 yield error message upon thread switching @louis-jan (#1109)
- fix: toaster success deleted thread showing id instead of active model @urmauur (#1111)
- fix: update copy setting page @urmauur (#1105)
- fix: search recommended model @urmauur (#1106)
- fix: #1097 streaming response is replaced by error message @louis-jan (#1099)
- Fix auto update windows Bug @hiento09 (#1102)
- fix: added dialog confirmation when delete thread @urmauur (#1093)
- fix: system monitor broken layout when responsive @urmauur (#1085)
- bug: chatbox doesn't resize back down @urmauur (#1084)
- fix: thread is broken after deleted first generated message @louis-jan (#1061)

## 🧰 Maintenance

- feat: Add codeQL analysis for push main and pr main @hiro-v (#1128)
- docs: refactor dev docs, guides and specs @0xSage (#1092)
- Correct jq command cause ci nightly build run failed @hiento09 (#1104)
- Fix nightly build autoupdater @hiento09 (#1073)
- Feature autoupdater for nightly build @hiento09 (#1068)
- docs: Update product.md @0xSage (#1066)
- Posthog disable click event and increase timeout for nitro load model… @hiento09 (#1060)
- docs: improve quickstart docs @0xSage (#1047)

## Contributor

@0xSage, @hahuyhoang411, @hiento09, @hieu-jan, @hiro-v, @jan-service-account, @louis-jan, @namchuai and @urmauur


# v0.4.2

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.2)

## Changes

## Changes

- Hotfix model hub @hahuyhoang411 (#1033)
- Update Model.json @hahuyhoang411 (#1005)

## 🚀 Features

- feat: app theme depend on local storage instead native theme electron @urmauur (#1014)
- feat: move stop inference button into the send button @urmauur (#1011)
- feat: loader when starting model @urmauur (#945)
- fix: enable download app linux @urmauur (#993)
- fix: remove coming soon windows @urmauur (#986)

## 🐛 Fixes

- fix: migrate new models @louis-jan (#1034)
- fix: add input for api key remote model @urmauur (#1031)
- fix bug #1013, enable posthog for release app version only @hiento09 (#1019)
- fix: delete first message then regenerate again will break the thread @louis-jan (#1015)
- fix: #995 - Fix onboarding state and model sorting @louis-jan (#1009)
- fix: limit analytics events capture @louis-jan (#1012)
- fix: wrong selected model right panel @urmauur (#1001)
- fix: review finder and view as json @louis-jan (#1000)
- fix: enable download app linux @urmauur (#993)

## 🧰 Maintenance

- chore: remigrate if there is no models dir @louis-jan (#1038)
- bump nitro version to 0.1.30 @hiento09 (#1036)
- chore: in app copy fixes @0xSage (#1032)
- Separate posthog project for jan app and docs @hiento09 (#1029)
- Update posthog capture url list @hiento09 (#1022)
- docs: second half of "import model docs" PR @0xSage (#1021)
- docs: how to import models @0xSage (#1020)
- fix bug #1013, enable posthog for release app version only @hiento09 (#1019)

## Contributor

@0xSage, @hahuyhoang411, @hiento09, @jan-service-account, @louis-jan and @urmauur


# v0.4.1

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.1)

## Changes

## Changes

- Update README.md @imtuyethan (#903)

## 🚀 Features

- feat: Kill nitro process with API - nitro 0.1.27 @vuonghoainam (#975)
- feat: Inference Nitro with Prompt Template @hahuyhoang411 (#952)
- feat: Add NVIDIA triton trt-llm extension @vuonghoainam (#888)
- feat: Hotfit for Nitro loading on CPU with hyper-threading support @vuonghoainam (#931)
- feat: adding model params @namchuai (#886)
- feat: Multiple inference engines for nitro and openai @vuonghoainam (#814)
- docs: add json schema for engine and model parameters @tikikun (#840)
- feat: improve SEO keywords @hieu-jan (#894)
- enhancement: fix spacing landing page responsive @urmauur (#891)
- bug: added label coming soon for windows and linux @urmauur (#881)

## 🐛 Fixes

- fix: 963 can not run openai models on windows @louis-jan (#974)
- fix: Inference engine Nitro with Windows with/ without CUDA @vuonghoainam (#950)
- Fix error Jan app linux crash @hiento09 (#958)
- fix: windows bug - control buttons close,max,min hidden @linhtran174 (#949)
- bug: fix ui landing page @urmauur (#937)
- fix: model parameters for inference extensions @vuonghoainam (#935)
- [bug] Fix floating border outside card right panel @urmauur (#934)
- fix: import\_typescript.default.isTokenKind is not a function @louis-jan (#923)
- bug: fix syntax formatting @urmauur (#899)
- bug:  update metadata title and desc @urmauur (#884)
- fix: download button text color is blending into the background @louis-jan (#883)

## 🧰 Maintenance

- chore: add desktop app analytics @louis-jan (#978)
- refactor: clean types and interfaces @0xSage (#966)
- docs: scaffold dev docs @0xSage (#856)
- chore: Bump nitro to 0.1.26 @vuonghoainam (#960)
- Update update-release-url.yml @hiento09 (#951)
- Fix update release url pipeline run failed @hiento09 (#947)
- chore: Bumpt nitro bin version to version 0.1.23 @vuonghoainam (#942)
- Fix update release url pipeline @hiento09 (#941)
- CI automatically update Update README with Nightly Build Information and stable download URL @hiento09 (#940)
- refactor: deprecate invokers - auto proxying apis - strict types @louis-jan (#924)
- docs: standardize yaml files @hieu-jan (#933)
- chore: universal module definition @louis-jan (#902)
- docs: add assistants api reference @hieu-jan (#801)
- docs: add json schema for engine and model parameters @tikikun (#840)

## Contributor

@0xSage, @hahuyhoang411, @hiento09, @hieu-jan, @imtuyethan, @jan-service-account, @linhtran174, @louis-jan, @namchuai, @tikikun, @urmauur and @vuonghoainam


# v0.4.0

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.4.0)

## Changes

## Changes

- bug: fix tag description showing a title and fix card right panel @urmauur (#878)
- fix/no-assistant-available-fresh-install @louis-jan (#876)
- Model.json update @hahuyhoang411 (#870)
- Hotfix desc for openhermes @hahuyhoang411 (#864)
- Openhermes update v1 @hahuyhoang411 (#863)
- update deepseek 1.3b @hahuyhoang411 (#858)
- Update tags @hahuyhoang411 (#857)
- Update model hub @hahuyhoang411 (#829)
- hotfix: fix typo @tikikun (#836)
- chore: pre-populate Jan's /models folder with model.jsons @hahuyhoang411 (#775)
- chore: clarification changes to the model settings and model parameters @tikikun (#742)

## 🚀 Features

- feat: revamp landing page @urmauur (#745)
- feat : add cover image model hub screen @urmauur (#872)
- feat: boilerplate for express server localhost 1337  @linhtran174 (#803)
- enhancement: revamp hub screen @urmauur (#825)
- feat: revamp thread screen @urmauur (#802)
- docs/update-api-reference @hieu-jan (#739)
- refactor: model plugin to follow new specs @namchuai (#682)

## 🐛 Fixes

- fix: Nitro interface update to prevent warning @vuonghoainam (#877)
- fix: delete message break the entire thread @louis-jan (#869)
- fix: can not download multiple models at once @louis-jan (#867)
- fix: production CI workflow does not populate models @louis-jan (#862)
- fix: update wrong main view state when use a model @namchuai (#861)
- fix: handle crash issue on hljs highlighting @louis-jan (#859)
- fix: empty assistant instruction by default @louis-jan (#855)
- bug: fix broken banner position hub screen @urmauur (#846)
- fix: not update active model when using resend button @namchuai (#834)
- Hotfix jan windows download nitro failed @hiento09 (#838)
- Switch to download nitro .tar.gz file instead of .zip file on windows @hiento09 (#832)
- fix/docusaurus-seo @hieu-jan (#818)
- fix: CI script - reorder copy models action @louis-jan (#819)
- fix: messages sync is not threadsafe @louis-jan (#784)
- Fix Makefile Indentation Issue @hiento09 (#788)

## 🧰 Maintenance

- chore: update model ranking @louis-jan (#874)
- Bump nitro version to 0.1.21 - nitro has windows codesign @hiento09 (#843)
- Hotfix jan windows download nitro failed @hiento09 (#838)
- 810 docs add modeljson and revamp models specs page @tikikun (#816)
- Add document for nightly build and update message for manual build @hiento09 (#831)
- chore: Bump nitro to 0.1.20 @vuonghoainam (#830)
- Refactor build:extension command @hiento09 (#822)
- feat: pre-populate Jan's /models folder @namchuai (#796)
- chore: fix pr auto labeling @0xSage (#812)
- chore: add gi automations @0xSage (#809)
- refactor: jan extensions  @louis-jan (#799)
- Remove .zip in artifact name @hiento09 (#800)
- docs/update-api-reference @hieu-jan (#739)
- Add nightly build ci  @hiento09 (#794)
- Fix Makefile Indentation Issue @hiento09 (#788)
- Switch from .zip to .tar.gz for nitro url inference plugin @hiento09 (#781)

## Contributor

@0xSage, @hahuyhoang411, @hiento09, @hieu-jan, @linhtran174, @louis-jan, @namchuai, @tikikun, @urmauur and @vuonghoainam


# v0.3.3

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.3.3)

## Changes

## Changes

- docs: cleanup @0xSage (#719)
- docs: threads and messages @0xSage (#681)
- Updating Onboarding Kit @Diane0111 (#675)
- Update issue templates @0xSage (#685)
- docs: polish models spec @0xSage (#680)
- Feature: Preview URL for each PR and add pre-release.jan.ai as staging of Jan Docs @hiento09 (#669)
- Migrate Model definitions to Swagger/OpenAPI @dan-jan (#659)
- [docs] Add Introduction and refactor Models Spec @dan-jan (#657)
- docs: Add model methods to swagger @0xSage (#660)
- Models Spec: Delete broken Markdown links @dan-jan (#648)
- docs: assistants and threads specs @0xSage (#646)

## 🚀 Features

- improvement: styling message action toolbar @urmauur (#737)
- experimental: allow user to give instruction for the conversation @louis-jan (#714)
- docs/enable-seo-docusaurus @hieu-jan (#725)
- Add windows code sign to CI @hiento09 (#712)
- docs: update installation guide @hieu-jan (#664)
- chore: Update based on team discussion on Nov 20 @vuonghoainam (#673)
- docs: add OpenAI swagger file @hieu-jan (#623)
- Update landing page Jan @urmauur (#638)

## 🐛 Bug Fixes

- chore: open app data should lead user to jan root @louis-jan (#749)
- fix: cancel download does not work @louis-jan (#746)
- fix: error when switching between threads @louis-jan (#736)
- chore: app raises error when attempting to start a model that is already starting @louis-jan (#721)
- bug: fix filter list menu from command base on search type and make a symbol base on OS @urmauur (#723)
- bug: fix clickable small download button on chat screen @urmauur (#722)
- fix: incorrect update progress bar visibility check @louis-jan (#713)
- fix: app shows wrong performance tag, all say not enough ram on windows @louis-jan (#699)
- bug: fix padding quotations and numbering list @urmauur (#695)
- fix: local npm module update does not reflect web app @louis-jan (#677)
- [bug] fix markdown todo items shifted to the left and remove the dots @urmauur (#694)
- bug: fix footer and section spacing landing page @urmauur (#683)
- bug: fix anchor link sidebar openapi @urmauur (#668)
- refactor: remove unused hooks and resolve no-explicit-any @louis-jan (#647)
- bug: fix titles should have spaces in between @urmauur (#652)
- bug: fix compatibility content not fully display @urmauur (#653)

## 🧰 Maintenance

- chore: fix app grammar @0xSage (#750)
- chore: bumb nitro version @louis-jan (#740)
- chore: fs module should not cover app logic @louis-jan (#720)
- API Reference for Models, Messages, Threads @hahuyhoang411 (#679)
- docs: upgrade mdx-js package @hieu-jan (#705)
- [docs] Update Docusaurus to 3.0 and fix closing tag issue in Handbook @dan-jan (#704)
- Fix error docs pipeline run failed @hiento09 (#702)
- Revert docs CICD trigger on push to main instead of tag-based @hiento09 (#698)
- fix: local npm module update does not reflect web app @louis-jan (#677)
- Chore: refactor to makefile @hiento09 (#691)
- Add Instruction to publish docs @hiento09 (#687)
- chore/add-mermaid @hieu-jan (#672)
- chore/update package docs @hieu-jan (#670)
- Enhance Cross-Platform Argument Handling for Nitro Startup Scripts @hiento09 (#674)
- refactor: remove unused hooks and resolve no-explicit-any @louis-jan (#647)
- docs: add OpenAI swagger file @hieu-jan (#623)
- Preliminary Restructure of Docs @dan-jan (#655)
- Model specs @vuonghoainam (#641)
- refactor: refactor app entities @louis-jan (#626)
- refactor: move file to jan root @namchuai (#598)
- Add run-script-os  @linhtran174 (#620)
- Refactor Jan Documentation @dan-jan (#625)

## 📖 Documentaion

- docs: update specs/product @0xSage (#744)
- docs/enable-seo-docusaurus @hieu-jan (#725)
- docs: assistant spec @vuonghoainam (#707)
- docs: Refactor Jan Site Structure @dan-jan (#706)
- docs/improve install docs @hieu-jan (#708)
- API Reference for Models, Messages, Threads @hahuyhoang411 (#679)
- [docs] Update Docusaurus to 3.0 and fix closing tag issue in Handbook @dan-jan (#704)
- docs: update installation guide @hieu-jan (#664)
- chore: Update based on team discussion on Nov 20 @vuonghoainam (#673)
- docs: add OpenAI swagger file @hieu-jan (#623)
- Preliminary Restructure of Docs @dan-jan (#655)
- Fix: specs revision @vuonghoainam (#649)
- Model specs @vuonghoainam (#641)
- Update README.md @imtuyethan (#629)
- Refactor Jan Documentation @dan-jan (#625)

## Contributor

@0xSage, @Diane0111, @dan-jan, @hahuyhoang411, @hiento09, @hieu-jan, @imtuyethan, @linhtran174, @louis-jan, @namchuai, @urmauur, @vuonghoainam and Le Tra Mi


# v0.3.2

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.3.2)

## Changes

## Changes

- fix: disabled required env @urmauur (#612)
- Install Posthog snippet @imtuyethan (#573)
- web: google tag manager @urmauur (#562)
- docs: fix syntax highlighting @0xSage (#602)
- chore: remove past event @0xSage (#600)
- docs: new docs @0xSage (#599)
- [chore]: Update docs @dan-jan (#597)

## 🚀 Features

- refactor: main electron with managers and handlers @louis-jan (#610)

## 🐛 Bug Fixes

- Fix: Failed to load model - unload model nitro @louis-jan (#616)
- Restore cpx nitro step in yarn script @hiento09 (#617)
- fix(#591): prevent duplicate message id issue @namchuai (#595)
- bug: cancelling a model download should be delete the model file on user data @urmauur (#613)
- bug: fix weird padding vertical snippet code @urmauur (#608)
- bug: Fix button download detect intel or apple silicon @urmauur (#609)
- bug: enable delete conversation after deleted model @urmauur (#594)
- bug: download modal should truncate model name @urmauur (#592)
- bug: support multiple line input chat using Textarea instead @urmauur (#593)

## 🧰 Maintenance

- refactor: main electron with managers and handlers @louis-jan (#610)
- Chore/refactor yarn script @hiento09 (#615)
- fix: line height and update typography component @urmauur (#611)

## Contributor

@0xSage, @dan-jan, @hiento09, @imtuyethan, @jan-service-account, @louis-jan, @namchuai and @urmauur


# v0.3.1

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.3.1)

## Changes

## Changes

- fix: preformatted text indents the first line strangely @louis-jan (#580)
- fix: failed to package app since core and uikit are not being built @louis-jan (#575)
- cleanup: remove component folder and cleanup conversation screen @urmauur (#574)
- bug: update convo state when user change model @urmauur (#571)
- fix(#566): jan cannot retrieve the conversations @namchuai (#570)
- bug: Toast messages shows [object object] @urmauur (#569)
- ui: improve state of welcome screen @urmauur (#563)
- chore: fixed an issue where app does not yield message result @louis-jan (#561)
- Update readme @urmauur (#560)
- ui: standalone UIKit and refactor @urmauur (#557)
- Small description changes @dan-jan (#558)
- add 'change download button based on OS' feature @Vikram-2004 (#551)
- feat: revamp plugin architecture @louis-jan (#535)
- Fix mobile padding @imtuyethan (#550)
- chore: Update Readme @dan-jan (#549)
- Update Homepage and README with 1-line pitch @dan-jan (#548)
- docs: Add About, Events, Blog @dan-jan (#546)
- Ashley/update website content @imtuyethan (#545)
- Add guides @hahuyhoang411 (#488)
- Structure Docs @dan-jan (#536)
- Update README.md @imtuyethan (#533)
- Chore: Setup "Jan Improvements Proposal" workflow @dan-jan (#534)
- Update website tag line @imtuyethan (#527)
- fix: #396 - allow user to cancel a model download @louis-jan (#530)
- fix: #479 - Toggle plugin is now experimental feature @louis-jan (#531)
- chore: disable app update on test @louis-jan (#521)
- bug: chat UI is not consistent  @urmauur (#520)
- refactor: plugin manager and execution as ts @louis-jan (#504)
- fix: app toolbar is gone on windows @louis-jan (#503)
- Chore: refactor code, hide plugin menu in web @ghost (#502)
- fix: dest.end is not a function @louis-jan (#501)
- #255: Jan cloud native @ghost (#320)
- bug: download new version should show in status bar @urmauur (#500)
- feat: add New Conversation button on the conversation sidebar @urmauur (#499)
- chore: update plugin readme @louis-jan (#497)
- chore: update plugins license @louis-jan (#496)
- #255: Read plugins manifest from CDN @ghost (#495)
- chore: update plugin sdk - add appDataPath @louis-jan (#492)
- chore: enable back bot function for edge-release @louis-jan (#474)
- chore: attempt to kill Nitro subprocesses @louis-jan (#484)
- docs: new dev hub @0xSage (#450)

## 🚀 Features

- feat: Experimental Feature Toggle @louis-jan (#525)

## 🐛 Bug Fixes

- Add rebuild leveldown for arm on mac intel @hiento09 (#487)

## 🧰 Maintenance

- Bump nitro version from 0.1.4 to 0.1.6 @hiento09 (#581)
- Add set yarn network timeout for uikit @hiento09 (#579)
- Fix error CI e2e run failed on windows @hiento09 (#578)
- Fix build plugins macos codesiging error @hiento09 (#576)
- Add install nitro mac intel inference plugin build locally @hiento09 (#542)
- Bump nitro version to 0.1.4 @hiento09 (#532)
- Chore/update yarn dev script @hiento09 (#529)
- Inference Plugin pull nitro binary from release @hiento09 (#524)
- Correct version and license @hiento09 (#498)

## Contributor

@0xSage, @Vikram-2004, @dan-jan, @hahuyhoang411, @hiento09, @imtuyethan, @jan-service-account, @louis-jan, @namchuai, @tikikun, @urmauur, Han, James, John and nam-john-ho


# v0.3.0

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.3.0)

## Changes

## Changes

- fix: hide preferences section if empty @louis-jan (#482)
- chore: fix conversation summary @louis-jan (#480)
- chore: missing create conversation button when there is no conversation is selected @louis-jan (#478)
- fix: download now change state immediately @namchuai (#475)
- chore: add required app version to edge release plugin @louis-jan (#471)

## 🐛 Bug Fixes

- add rebuild for mac x64 @hiento09 (#473)

## 🧰 Maintenance

- Add build deps for data-plugin in CI @hiento09 (#472)

## Contributor

@hiento09, @hientominh, @jan-service-account, @louis-jan and @namchuai


# v0.2.3

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.2.3)

## Changes

## Changes

- fix: hide preferences section if empty @louis-jan (#482)
- chore: fix conversation summary @louis-jan (#480)
- chore: missing create conversation button when there is no conversation is selected @louis-jan (#478)
- fix: download now change state immediately @namchuai (#475)
- chore: add required app version to edge release plugin @louis-jan (#471)

## 🐛 Bug Fixes

- add rebuild for mac x64 @hiento09 (#473)

## 🧰 Maintenance

- Add build deps for data-plugin in CI @hiento09 (#472)

## Contributor

@hiento09, @hientominh, @jan-service-account, @louis-jan and @namchuai


# v0.2.2

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.2.2)

## Changes

## Changes

- chore: plugin and app version dependency @louis-jan (#469)
- bug: showing a modal when user start conf but model not active @urmauur (#466)
- fix: duplicated modal and loading state @louis-jan (#465)
- bug: fix overflow scroll horizontal message @urmauur (#464)
- bug: avoid chat body scroll horizontal @urmauur (#462)
- bug: fix logic plugin update plugin and show installed version @urmauur (#459)
- bug: chat view drops enumeration @urmauur (#456)
- fix: allow switching models when switch between conversations @namchuai (#458)
- fix: CI run fails on windows @louis-jan (#463)
- fix: failed to build electron app @louis-jan (#461)
- fix: correct app version display @louis-jan (#452)
- fix: enable link color blue on docusaurus markdown @urmauur (#449)

## 🚀 Features

- feat: Add ADR-008 for extensible Jan @vuonghoainam (#431)

## 🐛 Bug Fixes

- data-plugin force leveldown to 6.1.1 @hiento09 (#453)

## 🧰 Maintenance

- Use electron-rebuild to build leveldown@5.6.0 for darwin arm64 @hiento09 (#455)
- data-plugin force leveldown back to 5.6.0 and rebuild for darwin arm64 @hiento09 (#454)
- data-plugin force leveldown to 6.1.1 @hiento09 (#453)

## Contributor

@hiento09, @jan-service-account, @louis-jan, @namchuai, @urmauur and @vuonghoainam


# v0.2.1

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.2.1)

## Changes

## Changes

- fix: model is started but the indicator is not stopped loading @louis-jan (#446)
- fix: bring back install plugin manually function @louis-jan (#448)
- fix: duplicated messages when user switch between conversations @namchuai (#441)
- chore: added loader starting and stopping model @urmauur (#438)
- chore: Change license to AGPL @dan-jan (#442)
- fix: plugin \& model catalog import cache are not cleared properly @louis-jan (#437)
- fix error codesign @hiento09 (#439)
- fix: app version and cleanup unused code @urmauur (#434)
- chore: update core service - get plugin manifest @louis-jan (#432)
- ui: interface revamp @urmauur (#429)
- fix: scroll on explore models does not work @namchuai (#427)
- feat: adding create bot functionality @namchuai (#368)
- chore: install or update a plugin should not interrupt dev process @louis-jan (#420)
- chore: Update nitro 0.1.2 windows/ linux @vuonghoainam (#421)
- chore: update core service enums @louis-jan (#414)
- feat: chat with documents plugin @louis-jan (#417)
- misc: setup prettier  @urmauur (#412)
- adr: 007 - Jan Plugin Catalog @louis-jan (#408)
- adr: 006 - Jan Core Module @louis-jan (#404)
- feat: Support for nitro release 0.1.2 @vuonghoainam (#409)
- feat: explore plugins from the npm repository and install them remotely @louis-jan (#399)
- feat: fix event description @dan-jan (#400)
- fix: high cpu usage @louis-jan (#401)
- docs: model installation ADR @0xSage (#390)
- chore: update core events module @louis-jan (#394)
- feat: Update Social OG Image and Meta Description @dan-jan (#387)
- misc: UI home @urmauur (#392)
- Update hcmc-oct23.md @0xSage (#389)
- chore: remove deprecated extension functions @louis-jan (#388)
- Fix bugs image overlap dropdown button download @urmauur (#384)
- chore: resolve fetch models api limit rate @louis-jan (#383)
- chore: update convo summary @louis-jan (#378)
- Update interface landing page @urmauur (#381)
- Add simple copywriting changes @dan-jan (#382)
- chore: update core services and module export @louis-jan (#376)
- chore: #371 - reference to plugin name and module path as variables @louis-jan (#372)
- feat: Edit event details, hide all unnecessary website sections @dan-jan (#369)
- docs: UI Service ADR @0xSage (#318)
- Feat/issue 255 adr 001 jand cloud native @nam-john-ho (#262)
- Move plugins folder from electron to root folder @hiento09 (#366)
- feature: core plugin support events \& preferences modules @louis-jan (#365)
- Fix/250 @namchuai (#349)
- Change License and update README @dan-jan (#356)
- Jan 339 @dan-jan (#348)
- feat: Jan 339 @dan-jan (#347)
- Add social og:image @dan-jan (#346)
- feat(ard): Add adr 002 @vuonghoainam (#261)

## 🚀 Features

- #357 plugin \& app can subscribe and emit events @louis-jan (#358)
- feature: @janhq/plugin-core module \& usage @louis-jan (#321)

## 🐛 Bug Fixes

- Change to load nitron on windows and linux from bash/shell script @hiento09 (#451)
- Fix data-plugin install failed on mac silicon from npm @hiento09 (#413)
- Correct version of plugins @hiento09 (#374)

## 🧰 Maintenance

- upgrade leveldown to newest version @hiento09 (#447)
- Update auto-sign plugin by search file permission 664 @hiento09 (#445)
- Change codesign plugin folder in ci @hiento09 (#440)
- Add continue on error for import cert @hiento09 (#436)
- Update code siging for new data plugin @hiento09 (#433)
- Add readme inference plugin @hiento09 (#426)
- Add username to remote origin @hiento09 (#425)
- Add auto create PR to plugin-catalog when a new version of plugin is … @hiento09 (#416)
- Fix data-plugin install failed on mac silicon from npm @hiento09 (#413)
- Chore/remove package lock @hiento09 (#398)
- Refactor cicd @hiento09 (#397)
- Correct version of plugins @hiento09 (#374)
- Rename plugin-core to core @hiento09 (#370)
- Fix error check change in plugins folder @hiento09 (#367)
- chore: jan.ai nits @0xSage (#354)

## Contributor

@0xSage, @dan-jan, @hiento09, @jan-service-account, @louis-jan, @nam-john-ho, @namchuai, @tikikun, @urmauur, @vuonghoainam and Hien To


# v0.2.0

For more details, [Click here](https://github.com/janhq/jan/releases/tag/v0.2.0)

## Changes

## Changes

- feat: Add Jan Hacker House event page to Docs @dan-jan (#342)
- feat: Hide incomplete Hardware section from Docs site @dan-jan (#341)
- style: better chatbox ui @0xSage (#338)
- feat: allowing user to fetch models from github @namchuai (#319)
- fixes: #247 - inference plugin should check nitro service available @louis-jan (#313)
- Fix icon error for linux app @hiento09 (#316)
- docs: initial hardware content @Its-Alamin-H (#240)
- fixes #277 - bug: memory utilization always at 99% @louis-jan (#309)
- Docusaurus parser string from githubapi to get latest release @hiento09 (#312)
- Footer background, CTA \& Highlight colors @drakehere (#288)
- Fix CI Test run failed on ubuntu and change release file app name @hiento09 (#307)
- Add docusaurus test build pipeline @hiento09 (#302)
- fix: #271 Cannot read properties of undefined (reading 'map') @louis-jan (#300)
- Fix Docusaurus server side render error @hiento09 (#301)
- fix #283: small ui fixes @namchuai (#299)

## 🐛 Bug Fixes

- Fix #290: Add description in package.json and rename to jan @hiento09 (#333)

## 🧰 Maintenance

- Add Documentation category to release note template @hiento09 (#332)
- Chore/release note template @hiento09 (#323)
- Add release note template @hiento09 (#322)

## 📖 Documentaion

- Add auto update app download url on jan.ai @hiento09 (#311)
- docs: update per v0.1.3 @0xSage (#280)

## Contributor

@0xSage, @Its-Alamin-H, @dan-jan, @drakehere, @hiento09, @hientominh, @louis-jan, @namchuai, Hien To and James

