import request from '@/utils/request'

export default {
    // 条件分页查询课程的方法
    getCourseList(page,limit,searchObj) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },
    // 查询所有分类的方法
    getAllSubject() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get'
        })
    },
    // 查询课程详情的方法
    getCourseInfo(courseId) {
        return request({
            url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
            method: 'get'
        })
    }
}
