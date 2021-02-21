<!-- 参数 -->
<template>
    <div v-if="Object.keys(paramInfo).length!==0" class="form-tr">
        <table v-for="(table,index) in paramInfo.sizes" :key="index">
            <tr v-for="(tr,indey) in table" :key="indey" class="table-tr">
                <td v-for="(td,indez) in tr" :key="indez" class="table-td">{{td}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            paramInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
            };
        },

        components: {},

        computed: {},

        methods: {}
    }

</script>
<style scoped>
    .form-tr {
        text-align: center;
        margin-top: 30px;
        background-color: rgb(195, 235, 235);
    }



    .table-tr {
        padding: 5px 5px;

    }

    .table-td {
        padding: 15px 23px;
        color: rgb(212, 132, 41);

    }
</style>