const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器1了')
  console.log('请求资源是:', request.url)
  console.log('请求来自于:', request.get('Host'))
  next()
})

app.get('/students', (request, response) => {
  const routes = {
    router: [
      {
        path: '/Storage',
        component: 'Storage/index',
        name: 'Storage',
        redirect: '/Storage/Warehousing',
        id: '1-1',
        parentId: '1',
        title: '仓储管理',
        meta: {
          title: '仓储管理',
          icon: 'menu'
        },
        children: [
          {
            path: '/Storage/Warehousing',
            component: 'Storage/Warehousing/index',
            name: 'Warehousing',
            redirect: '',
            id: '1-1-1',
            parentId: '1-1',
            title: '入库管理',
            meta: {
              title: '入库管理',
              icon: 'menu'
            }
          },
          {
            path: '/Storage/Exwarehouse',
            component: 'Storage/Exwarehouse/index',
            name: 'Exwarehouse',
            redirect: '',
            id: '1-1-2',
            parentId: '1-1',
            title: '出库管理',
            meta: {
              title: '入库管理',
              icon: 'menu'
            },
            children: [
              {
                path: '/Storage/Exwarehouse/IssuePlan',
                component: 'Storage/Exwarehouse/component/IssuePlan',
                name: 'IssuePlan',
                redirect: '',
                id: '1-1-2-1',
                parentId: '1-1-2',
                title: '出库计划单',
                meta: {
                  title: '出库计划单',
                  icon: 'menu'
                }
              },
              {
                path: '/Storage/Exwarehouse/ExwarehouseTall',
                component: 'Storage/Exwarehouse/component/ExwarehouseTally',
                name: 'ExwarehouseTally',
                redirect: '',
                id: '1-1-2-2',
                parentId: '1-1-2',
                title: '出库理货单',
                meta: {
                  title: '出库理货单',
                  icon: 'menu'
                }
              },
              {
                path: '/Storage/Exwarehouse/MiscellaneousBill',
                component: 'Storage/Exwarehouse/component/MiscellaneousBill',
                name: 'MiscellaneousBill',
                redirect: '',
                id: '1-1-2-3',
                parentId: '1-1-2',
                title: '杂费单',
                meta: {
                  title: '杂费单',
                  icon: 'menu'
                }
              },
              {
                path: '/Storage/Exwarehouse/Worksheet',
                component: 'Storage/Exwarehouse/component/Worksheet',
                name: 'IssuePlan',
                redirect: '',
                id: '1-1-2-4',
                parentId: '1-1-2',
                title: '作业单',
                meta: {
                  title: '作业单',
                  icon: 'menu'
                }
              }
            ]
          },
          {
            path: '/Storage/Storehouse',
            component: 'Storage/Storehouse/index',
            name: 'Storehouse',
            redirect: '',
            id: '1-1-3',
            parentId: '1-1',
            title: '仓库管理',
            meta: {
              title: '仓库管理',
              icon: 'menu'
            }
          },
          {
            path: '/Storage/CostCalculation',
            component: 'Storage/CostCalculation/index',
            name: 'CostCalculation',
            redirect: '',
            id: '1-1-4',
            parentId: '1-1',
            title: '费用计算',
            meta: {
              title: '费用计算',
              icon: 'menu'
            }
          }
        ]
      },
      // /BaseData/test
      {
        path: '/BaseData',
        component: 'BaseData/index',
        name: 'BaseData',
        redirect: '/BaseData/ownerManagement',
        id: '1-2',
        title: '基础数据',
        meta: {
          title: '基础数据',
          icon: 'menu'
        },
        children: [
          {
            path: '/BaseData/OwnerManagement',
            component: 'BaseData/OwnerManagement/index',
            name: 'OwnerManagement',
            redirect: '',
            id: '1-2-1',
            parentId: '1-2',
            title: '货主管理',
            meta: {
              title: '货主管理',
              icon: 'menu'
            }
          },
          {
            path: '/BaseData/ContractManagement',
            component: 'BaseData/ContractManagement/index',
            name: 'ContractManagement',
            redirect: '',
            id: '1-2-2',
            parentId: '1-2',
            title: '合同管理',
            meta: {
              title: '合同管理',
              icon: 'menu'
            }
          },
          {
            path: '/BaseData/ConfigurationManagement ',
            component: 'BaseData/ConfigurationManagement/index',
            name: 'ConfigurationManagement',
            redirect: '',
            id: '1-2-3',
            parentId: '1-2',
            title: '配置管理',
            meta: {
              title: '配置管理',
              icon: 'menu'
            }
          },
          {
            path: '/BaseData/CommodityManagement',
            component: 'BaseData/CommodityManagement/index',
            name: 'CommodityManagement',
            redirect: '',
            id: '1-2-4',
            parentId: '1-2',
            title: '商品管理',
            meta: {
              title: '商品管理',
              icon: 'menu'
            }
          },
          {
            path: '/BaseData/PersonnelManagement',
            component: 'BaseData/PersonnelManagement/index',
            name: 'PersonnelManagement',
            redirect: '',
            id: '1-2-5',
            parentId: '1-2',
            title: '人员管理',
            meta: {
              title: '人员管理',
              icon: 'menu'
            }
          },
          {
            path: '/BaseData/LogManagement',
            component: 'BaseData/LogManagement/index',
            name: 'LogManagement',
            redirect: '',
            id: '1-2-6',
            parentId: '1-2',
            title: '日志管理',
            meta: {
              title: '日志管理',
              icon: 'menu'
            }
          }
        ]
      },
      {
        path: '/SystemSettings',
        component: 'SystemSettings/index',
        name: 'SystemSettings',
        redirect: '/BaseData/MenuManagement',
        id: '1-3',
        parentId: '1',
        title: '系统设置',
        meta: {
          title: '系统设置',
          icon: 'menu'
        },
        children: [
          {
            path: '/SystemSettings/MenuManagement',
            component: 'SystemSettings/MenuManagement/index',
            name: 'MenuManagement',
            redirect: '',
            id: '1-3-1',
            parentId: '1-3',
            title: '菜单管理',
            meta: {
              title: '菜单管理',
              icon: 'menu'
            }
          },
          {
            path: '/SystemSettings/AuthorityManagement',
            component: 'SystemSettings/AuthorityManagement/index',
            name: 'AuthorityManagement',
            redirect: '',
            id: '1-3-2',
            parentId: '1-3',
            title: '权限管理',
            meta: {
              title: '权限管理',
              icon: 'menu'
            }
          },
          {
            path: '/SystemSettings/RoleManagement',
            component: 'SystemSettings/RoleManagement/index',
            name: 'RoleManagement',
            redirect: '',
            id: '1-3-3',
            parentId: '1-3',
            title: '角色管理',
            meta: {
              title: '角色管理',
              icon: 'menu'
            }
          },
          {
            path: '/SystemSettings/UserManagement',
            component: 'SystemSettings/UserManagement/index',
            name: 'UserManagement',
            redirect: '',
            id: '1-3-4',
            parentId: '1-3',
            title: '用户管理',
            meta: {
              title: '用户管理',
              icon: 'menu'
            }
          }
        ]
      }
    ]
  }

  response.send(routes)
})

app.get('/login', (request, response) => {
  console.log(request.query)
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiW1wiMTFiNzY4NWI3NWJlMTNhOTI3NjAwNmVjZDRiNGMwNjBcIl0iLCJpYXQiOjE2NjA1MzA3NjN9.hMieLhP8N6zmhiCzIV41EGfZIPFcwCMtDhQKO1CkcGY'
  response.send(token)
})
app.listen(9000, (err) => {
  if (!err) {
    console.log('服务器启动成功了，获取用户信息')
  }
})
