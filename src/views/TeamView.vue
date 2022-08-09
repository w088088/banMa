<template>
    <div class="wrap">
        <div class="top12">
            <img src="https://product-ssl-qiniu.bmtrip.com/product_5e218c80e137c.jpg" alt="">
            <div class="tab">
                <router-link to="/Product/individual">
                    <button class="tab1">私人定制</button>
                </router-link>
                <router-link to="/Product/team">
                    <button class="tab2">企业定制</button>
                </router-link>
            </div>
            <CustomList></CustomList>
            <!--  -->
            <div class="title-bar">
                <div class="title-bar__label">案例分享</div>
            </div>
            <van-tabs v-model:active="active" type="card" @click-tab="get">
                <van-tab title="旅行团建">
                    <div class="bm-customize-team-share__tabContent" v-for="(item, index) in arr" :key="item.id"
                        @click="jump(item.id)">
                        <div class="bm-custom-item">
                            <img :src="item.img" alt="">
                            <div class="bm-custom-item-info">
                                <div class="top">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="describe">{{ item.subtitle }}</div>
                                </div>
                                <ul class="item-tags">
                                    <li v-for="(item2, index2) in item.mark">{{ item2.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="奖励旅游">
                    <div class="bm-customize-team-share__tabContent" v-for="(item, index) in arr" :key="item.id"
                        @click="jump(item.id)">
                        <div class="bm-custom-item">
                            <img :src="item.img" alt="">
                            <div class="bm-custom-item-info">
                                <div class="top">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="describe">{{ item.subtitle }}</div>
                                </div>
                                <ul class="item-tags">
                                    <li v-for="(item2, index2) in item.mark">{{ item2.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="拓展活动">
                    <div class="bm-customize-team-share__tabContent" v-for="(item, index) in arr" :key="item.id"
                        @click="jump(item.id)">
                        <div class="bm-custom-item">
                            <img :src="item.img" alt="">
                            <div class="bm-custom-item-info">
                                <div class="top1">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="describe">{{ item.subtitle }}</div>
                                </div>
                                <ul class="item-tags">
                                    <li v-for="(item2, index2) in item.mark">{{ item2.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="会务旅行">
                    <div class="customized__end">
                        <ul>
                            <li>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fcHJvZmVzc2lvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5QUM1RkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQzOTRGRCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMTUyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS4k+S4miIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX3Byb2Zlc3Npb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzLjUsMTIuNDIgTDQzLjUsMjcgQzQzLjUsMzIuMzg1IDM4LjYyNSwzNy4yNiAzMy43NSw0MC43ODUgQzMwLjY4MTY3MTQsNDIuOTg0MjUyMiAyNy40MTc5ODUsNDQuODk3Mjc0NSAyNCw0Ni41IEwyNCwxLjggQzI0LjQzNTE1NTIsMS44MDAwMjI2NiAyNC44NjUwOTY2LDEuODk0NzEyMTQgMjUuMjYsMi4wNzc1IEw0MS43Niw5LjY5NzUgQzQyLjgyMDg5NjEsMTAuMTg4NDgwMiA0My40OTk5NzE4LDExLjI1MDk5OTYgNDMuNSwxMi40MiBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMS44IEwyNCw0Ni41IEMyNCw0Ni41IDQuNSwzNy43NyA0LjUsMjcgTDQuNSwxMi40MiBDNC41MDAwMjgxOCwxMS4yNTA5OTk2IDUuMTc5MTAzOTIsMTAuMTg4NDgwMiA2LjI0LDkuNjk3NSBMMjIuNzQsMi4wNzc1IEMyMy4xMzQ5MDM0LDEuODk0NzEyMTQgMjMuNTY0ODQ0OCwxLjgwMDAyMjY2IDI0LDEuOCBaIiBpZD0iUGF0aCIgZmlsbD0iIzQzOTRGRCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMTMuNSBMMjQsMTkuNTAwMDA0OSBMMjEuMjkyNSwxOS41IEMyMS4xMjA2MTY3LDE5LjUwMDg3ODcgMjAuOTcxMDg0MywxOS4zODI0OTkgMjAuOTMyNSwxOS4yMTUgTDE5LjYyLDEzLjk2NSBDMTkuNTkyNDg5NCwxMy44NTM3NTE0IDE5LjYxNzM1ODIsMTMuNzM2MDMgMTkuNjg3NTEzMSwxMy42NDU0MTMzIEMxOS43NTc2Njc5LDEzLjU1NDc5NjcgMTkuODY1NDA2OSwxMy41MDEyMzI5IDE5Ljk4LDEzLjUgTDI0LDEzLjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNDMERCRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDIyLjUgTDI0LDM0LjQyNSBDMjMuOTI1MzQ5NSwzNC40MjgyNjkyIDIzLjg1MTY1NTQsMzQuNDA3MjEzOCAyMy43OSwzNC4zNjUgTDE5LjcwMjUsMzEuNjM1IEMxOS41Nzk1NDk1LDMxLjU1MjQ3NjEgMTkuNTE1Mjc2MiwzMS40MDY0MDA2IDE5LjUzNzUsMzEuMjYgTDIwLjk0NzUsMjIuODE1IEMyMC45NzY3NjU5LDIyLjYzNDQxNTMgMjEuMTMyMDYzOSwyMi41MDEzMDI3IDIxLjMxNSwyMi41IEwyNCwyMi41IFoiIGlkPSJQYXRoIiBmaWxsPSIjQzBEQkZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy4wNjc1LDE5LjIxNSBMMjguMzgsMTMuOTY1IEMyOC40MDc1MTA2LDEzLjg1Mzc1MTQgMjguMzgyNjQxOCwxMy43MzYwMyAyOC4zMTI0ODY5LDEzLjY0NTQxMzMgQzI4LjI0MjMzMjEsMTMuNTU0Nzk2NyAyOC4xMzQ1OTMxLDEzLjUwMTIzMjkgMjguMDIsMTMuNSBMMjQsMTMuNSBMMjQsMTkuNTAwMDA0OSBMMjYuNzA3NSwxOS41IEMyNi44NzkzODMzLDE5LjUwMDg3ODcgMjcuMDI4OTE1NywxOS4zODI0OTkgMjcuMDY3NSwxOS4yMTUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI3LjA1MjUsMjIuODE1IEMyNy4wMjMyMzQxLDIyLjYzNDQxNTMgMjYuODY3OTM2MSwyMi41MDEzMDI3IDI2LjY4NSwyMi41IEwyNCwyMi41IEwyNCwzNC40MjUgQzI0LjA3NDY1MDUsMzQuNDI4MjY5MiAyNC4xNDgzNDQ2LDM0LjQwNzIxMzggMjQuMjEsMzQuMzY1IEwyOC4yOTc1LDMxLjYzNSBDMjguNDIwNDUwNSwzMS41NTI0NzYxIDI4LjQ4NDcyMzgsMzEuNDA2NDAwNiAyOC40NjI1LDMxLjI2IEwyNy4wNTI1LDIyLjgxNSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                                    alt="">
                                <div class="customized__end__text">
                                    <p>专业</p>
                                    <p>3年以上资深定制师，人均服务客户30人，综合定制满意度98%</p>
                                </div>
                            </li>
                            <li>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fc2VydmljZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkNEMDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y4QUQwMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMjI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuacjeWKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCA5NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNuX3NlcnZpY2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIG9wYWNpdHk9IjAiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzLjUsMTIuNDIgTDQzLjUsMjcgQzQzLjUsMzIuMzg1IDM4LjYyNSwzNy4yNiAzMy43NSw0MC43ODUgQzMwLjY4MTY3MTQsNDIuOTg0MjUyMiAyNy40MTc5ODUsNDQuODk3Mjc0NSAyNCw0Ni41IEwyNCwxLjggQzI0LjQzNTE1NTIsMS44MDAwMjI2NiAyNC44NjUwOTY2LDEuODk0NzEyMTQgMjUuMjYsMi4wNzc1IEw0MS43Niw5LjY5NzUgQzQyLjgyMDg5NjEsMTAuMTg4NDgwMiA0My40OTk5NzE4LDExLjI1MDk5OTYgNDMuNSwxMi40MiBaIiBpZD0iUGF0aCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMS44IEwyNCw0Ni41IEMyNCw0Ni41IDQuNSwzNy43NyA0LjUsMjcgTDQuNSwxMi40MiBDNC41MDAwMjgxOCwxMS4yNTA5OTk2IDUuMTc5MTAzOTIsMTAuMTg4NDgwMiA2LjI0LDkuNjk3NSBMMjIuNzQsMi4wNzc1IEMyMy4xMzQ5MDM0LDEuODk0NzEyMTQgMjMuNTY0ODQ0OCwxLjgwMDAyMjY2IDI0LDEuOCBaIiBpZD0iUGF0aCIgZmlsbD0iI0Y4QUQwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMzAgTDI0LDM0LjUgQzIyLjc1NzM1OTMsMzQuNSAyMS43NSwzMy40OTI2NDA3IDIxLjc1LDMyLjI1IEMyMS43NSwzMS4wMDczNTkzIDIyLjc1NzM1OTMsMzAgMjQsMzAgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDIyLjUgTDI0LDI3IEMyMi43NTczNTkzLDI3IDIxLjc1LDI1Ljk5MjY0MDcgMjEuNzUsMjQuNzUgQzIxLjc1LDIzLjUwNzM1OTMgMjIuNzU3MzU5MywyMi41IDI0LDIyLjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDE2LjY0MjUgTDI0LDE3LjU3MjUgTDE4Ljc1LDIyLjgyMjUgQzE4LjY1ODcyMzksMjIuOTE1MzEyMiAxOC41MjU4NDUxLDIyLjk1NDE0OSAxOC4zOTg5NTI3LDIyLjkyNTEwMTQgQzE4LjI3MjA2MDMsMjIuODk2MDUzNyAxOC4xNjkzMDk3LDIyLjgwMzI3NzcgMTguMTI3NSwyMi42OCBMMTUuMzc1LDE0LjQzIEMxNS4zMjc1NjAyLDE0LjI5NDk0NTEgMTUuMzYxMTQ0MiwxNC4xNDQ2NjM4IDE1LjQ2MTU2MjYsMTQuMDQyNjUxNSBDMTUuNTYxOTgxLDEzLjk0MDYzOTEgMTUuNzExNzE0OCwxMy45MDQ2OTI4IDE1Ljg0NzUsMTMuOTUgTDI0LDE2LjY0MjUgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGREU0QUEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDMwIEwyNCwzNC41IEMyNS4yNDI2NDA3LDM0LjUgMjYuMjUsMzMuNDkyNjQwNyAyNi4yNSwzMi4yNSBDMjYuMjUsMzEuMDA3MzU5MyAyNS4yNDI2NDA3LDMwIDI0LDMwIFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCwyMi41IEwyNCwyNyBDMjUuMjQyNjQwNywyNyAyNi4yNSwyNS45OTI2NDA3IDI2LjI1LDI0Ljc1IEMyNi4yNSwyMy41MDczNTkzIDI1LjI0MjY0MDcsMjIuNSAyNCwyMi41IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMi4xMzc1LDEzLjkyNzUgTDI0LDE2LjY0MjUgTDI0LDE3LjU3MjUgTDI5LjI1LDIyLjgyMjUgQzI5LjM0MTI3NjEsMjIuOTE1MzEyMiAyOS40NzQxNTQ5LDIyLjk1NDE0OSAyOS42MDEwNDczLDIyLjkyNTEwMTQgQzI5LjcyNzkzOTcsMjIuODk2MDUzNyAyOS44MzA2OTAzLDIyLjgwMzI3NzcgMjkuODcyNSwyMi42OCBMMzIuNjI1LDE0LjQzIEMzMi42OTAyMzc5LDE0LjI4OTE1NjUgMzIuNjYxOTYyNiwxNC4xMjI2NzggMzIuNTUzODgxNywxNC4wMTEyNzE1IEMzMi40NDU4MDA4LDEzLjg5OTg2NSAzMi4yODAyNTUzLDEzLjg2NjU1OTEgMzIuMTM3NSwxMy45Mjc1IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                                    alt="">
                                <div class="customized__end__text">
                                    <p>服务</p>
                                    <p>100+行中服务团队，7*24小时管家式响应，全球自建司导管理体系</p>
                                </div>
                            </li>
                            <li>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0NnB4IiB2aWV3Qm94PSIwIDAgNDAgNDYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fcHJvdGVjdGlvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4NkRFQTUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzVBQzQ3QSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLmlpHpqazml4XmuLjmlLnniYgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnp4HkurrorqLliLYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4wMDAwMDAsIC0yMzAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5paR6ams5peF5ri4LeWAvOW+l+aJmOS7mF9Nb2IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMTI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuS/nemanCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAxNjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljbl9wcm90ZWN0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00My41LDEyLjQyIEw0My41LDI3IEM0My41LDMyLjM4NSAzOC42MjUsMzcuMjYgMzMuNzUsNDAuNzg1IEMzMC42ODE2NzE0LDQyLjk4NDI1MjIgMjcuNDE3OTg1LDQ0Ljg5NzI3NDUgMjQsNDYuNSBMMjQsMS44IEMyNC40MzUxNTUyLDEuODAwMDIyNjYgMjQuODY1MDk2NiwxLjg5NDcxMjE0IDI1LjI2LDIuMDc3NSBMNDEuNzYsOS42OTc1IEM0Mi44MjA4OTYxLDEwLjE4ODQ4MDIgNDMuNDk5OTcxOCwxMS4yNTA5OTk2IDQzLjUsMTIuNDIgWiIgaWQ9IlBhdGgiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDEuOCBMMjQsNDYuNSBDMjQsNDYuNSA0LjUsMzcuNzcgNC41LDI3IEw0LjUsMTIuNDIgQzQuNTAwMDI4MTgsMTEuMjUwOTk5NiA1LjE3OTEwMzkyLDEwLjE4ODQ4MDIgNi4yNCw5LjY5NzUgTDIyLjc0LDIuMDc3NSBDMjMuMTM0OTAzNCwxLjg5NDcxMjE0IDIzLjU2NDg0NDgsMS44MDAwMjI2NiAyNCwxLjggWiIgaWQ9IlBhdGgiIGZpbGw9IiM1QUM0N0EiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLDIzLjI1IEwyNC43NSwyMy4yNSBMMjQuNzUsMzIuMjUgQzI0Ljc0ODcwNywzMi44ODg2Nzg4IDI0LjQ3NjA0NTIsMzMuNDk2NzE0NiAyNCwzMy45MjI1IEwyNCwxMy41IEMyNC40MTQyMTM2LDEzLjUgMjQuNzUsMTMuODM1Nzg2NCAyNC43NSwxNC4yNSBMMjQuNzUsMTQuMjg3NSBDMjkuNDExMTUxNywxNC42NzcyODQgMzIuOTk2NzgsMTguNTcyNTgwMSAzMywyMy4yNSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMTMuNSBMMjQsMzMuOTIyNSBDMjMuMzM5MjY3OSwzNC41MTM0OCAyMi4zOTMxMTE0LDM0LjY2MTQyMDkgMjEuNTgzNTE1NCwzNC4zMDAzNDExIEMyMC43NzM5MTk0LDMzLjkzOTI2MTIgMjAuMjUxNzkxNCwzMy4xMzY0NjU1IDIwLjI1LDMyLjI1IEMyMC4yNSwzMS44MzU3ODY0IDIwLjU4NTc4NjQsMzEuNSAyMSwzMS41IEMyMS40MTQyMTM2LDMxLjUgMjEuNzUsMzEuODM1Nzg2NCAyMS43NSwzMi4yNSBDMjEuNzUsMzIuNjY0MjEzNiAyMi4wODU3ODY0LDMzIDIyLjUsMzMgQzIyLjkxNDIxMzYsMzMgMjMuMjUsMzIuNjY0MjEzNiAyMy4yNSwzMi4yNSBMMjMuMjUsMjMuMjUgTDE1LDIzLjI1IEMxNS4wMDMyMiwxOC41NzI1ODAxIDE4LjU4ODg0ODMsMTQuNjc3Mjg0IDIzLjI1LDE0LjI4NzUgTDIzLjI1LDE0LjI1IEMyMy4yNSwxMy44MzU3ODY0IDIzLjU4NTc4NjQsMTMuNSAyNCwxMy41IFoiIGlkPSJQYXRoIiBmaWxsPSIjQzhFQkQzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                                    alt="">
                                <div class="customized__end__text">
                                    <p>保障</p>
                                    <p>7大阳光政策，人性化退改，28类质量问题无条件先行赔付</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </van-tab>
                <!-- {{arr}} -->
            </van-tabs>
            <!--  -->
        </div>
    </div>

</template>

<script>
import { getTeam } from '@/tools/ajax';
import { enter1 } from "@/tools/ajax"
import CustomList from '@/components/CustomList.vue';
export default {
    name: '斑马TeamView',
    components: {
        CustomList,
    },
    data() {
        return {
            flag: false,
            list: [],
            active: 0,
            arr: []
        };
    },
    created() {
        getTeam().then(res => {
            console.log(res, 111111111111);
            this.list = res.data.list
            this.flag = true
        }),
            this.get()
    },
    methods: {
        get() {
            getTeam().then(res => {
                console.log(res.data.list, "123");
                this.value1 = res.data
                this.value2 = res.data.list
                console.log(this.value2[this.active].product_ids, "12111");
                enter1({
                    ids: this.value2[this.active].product_ids
                }).then(res => {
                    // console.log(res.data.list,"123");
                    this.arr = res.data.list
                    console.log(this.arr);
                })
            })

        },
        jump(id) {
            this.$router.push("/quality?id=" + id)
        }

    },
};
</script>

<style lang="scss" scoped>
.top12 {
    img {
        width: 100%;
    }
}

.tab {
    display: flex;
    height: 52Px;
    margin: 0 18Px;

    a {
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0 auto;
    }

    button {
        width: 100%;
        height: 100%;
        border: none;

    }
}

.tab1 {
    background-color: rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
}

.tab2 {
    color: #C14374;
    background-color: #FFFFFF;
}

.title-bar .title-bar__label {
    font-size: 0.56rem;
    color: #333;
    letter-spacing: 0.01067rem;
    font-weight: bold;
    margin-bottom: 0.08rem;
}

:deep(.van-tab--card) {
    padding: 20px;
    color: black;
    border-right: white;
    background-color: #f6f6f6;
    margin-left: 5px;
}

:deep(.van-tab--card.van-tab--active) {
    color: white;
    background-color: #c04374;
}

:deep(.van-tabs__nav--card) {
    border: white;
}

.bm-custom-item {
    box-sizing: border-box;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    margin-bottom: 0.48rem;
}

.bm-custom-item img {
    width: 2.93333rem;
    height: 2.93333rem;
    min-width: 2.93333rem;
    margin-right: 0.24rem;
}

.bm-custom-item .bm-custom-item-info {
    box-sizing: border-box;
    background: #fff;
    height: 2.93333rem;
}

.bm-custom-item .bm-custom-item-info .top .title {
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 15Px;
    color: #333333;
    letter-spacing: 0;
    white-space: pre-wrap;
    margin-bottom: 1Px;
}

.bm-custom-item .bm-custom-item-info .top .describe {
    font-family: PingFangSC-Light;
    font-size: 11Px;
    color: #898989;
    letter-spacing: 0.004rem;
}

.bm-custom-item .bm-custom-item-info .item-tags {
    font-size: 0;
    margin-top: 10Px;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.bm-custom-item .bm-custom-item-info .item-tags li:not(:last-child) {
    margin-right: 0.24rem;
}

.bm-custom-item .bm-custom-item-info .item-tags li {
    display: inline-block;
    background: #FFFFFF;
    border: 1Px solid rgba(193, 67, 116, 0.5);
    border-radius: 0.05333rem;
    padding: 3Px 6Px;
    box-sizing: border-box;
    font-family: PingFangSC-Regular;
    font-size: 0.26667rem;
    color: #C14374;
    letter-spacing: 0;
}

.customized__end {
    padding-top: 0.53333rem;
    margin-top: 0.85333rem;
    border-top: 0.01333rem solid #e1e1e1;
}

.customized__end li {
    display: flex;
    text-align: left;
    margin-bottom: 0.53333rem;
}

.customized__end li .customized__end__text {
    margin-left: 0.42667rem;
}

.customized__end li .customized__end__text p:first-child {
    font-size: 0.4rem;
    font-weight: bold;
    color: #333;
    letter-spacing: 0.02133rem;
    line-height: 0.53333rem;
}

.customized__end li .customized__end__text p:last-child {
    font-family: PingFangSC-Regular;
    font-size: 0.29333rem;
    color: #898989;
    letter-spacing: 0.004rem;
}

:deep(.van-tabs__content) {
    padding: 20px;
}
</style>