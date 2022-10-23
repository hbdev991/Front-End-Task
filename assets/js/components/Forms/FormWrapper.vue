<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="formList">
                    <div class="formList__formItems formItems">
                        <!--
                            Usage of anonymous slot for injecting child components
                        -->
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    