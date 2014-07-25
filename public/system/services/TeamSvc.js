'use strict';

define(['services/_services'], function(services) {
    // TeamCtrl.js에서 TeamListCtrl과 TeamFilterCtl의 필터 데이터를 공유하기 위해
    // 컨트롤러 내에서 필터 데이터를 생성하지 않고 별도 서비스를 생성하여 호출
    services.factory('TeamFilter', function() {
        return {
            activeFilters: {},
            searchText: ''
        }
    });
});
