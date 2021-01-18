export class ModuleFormat {
    constructor(moduleData) {
        this.module = Object.assign({
            name: '',
            classId: '',
            type: 'default',
            limit: 4,
            style: [],
            text: [],
            article: [],
            detail: {
                before: {},
                mid: {},
                after: {}
            },
            info: []
        }, moduleData)
    }
}
