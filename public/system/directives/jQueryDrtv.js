'use strict';

define(['directives/_directives'], function(directives) {

    directives.directive('datepicker', function() {
        return {
            // angularJS가 기본적으로 지시어를 속성에만 사용하게끔 제한
            restrict: 'A',
            // 반드시 ng-model과 함께 사용하게 함
            require: '?ngModel',
            scope: {
                // 이 메소드를 정의해서 뷰 컨트롤러에 있는 지시어에 전달해야 한다.
                select: '&' // 참조하는 select 함수를 정확한 스코프에 바인딩
            },
            link : function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                var updateModel = function(dateText) {
                    scope.$apply(function() {
                        // 양방향 바인딩을 업데이트하는 내부의
                        // AngularJS 도우미 함수를 호출
                        ngModel.$setViewValue(dateText);
                    });
                };

                // 모델이 변경될 때 뷰를 업데이트할 방식
                ngModel.$render = function() {
                    // AngularJS의 내부 binding-specific 변수를 사용
                    element.datepicker('setDate', ngModel.$viewValue || '');
                };

                element.datepicker({
                    'dateFormat': 'yy-mm-dd',
                    'onSelect': function(dateText, inst) {
                        updateModel(dateText);

                        if (scope.select) {
                            scope.$apply(function() {
                                scope.select({
                                    date: dateText
                                });
                            });
                        }
                    }
                });
            }
        };
    });

    directives.directive('fileupload', ['$cookies',
        function($cookies) {
            return {
                restrict: 'A',
                scope: {
                    done: '&',
                    progress: '&'
                },
                link: function(scope, element, attrs) {
                    var optionsObj = {
                        dataType: 'json',
                        headers: { 'X-XSRF-TOKEN': $cookies['XSRF-TOKEN'] },
                        add: function(e, data) {
                            var uploadErrors = []
                              , acceptFileTypes = /^image\/(gif|jpe?g|png)$/i /* /(\.|\/)(gif|jpe?g|png)$/i */
                              , maxFileSize = 1024000; // 1MB

                            if (!acceptFileTypes.test(data.originalFiles[0]['type'])) {
                                uploadErrors.push('이미지 파일이 아닙니다.');
                            }

                            if (data.originalFiles[0]['size'] > maxFileSize) {
                                uploadErrors.push('파일 크기를 1mb를 초과할 수 없습니다.');
                            }

                            if (uploadErrors.length > 0) {
                                alert(uploadErrors.join("\n"));
                            } else {
                                data.submit();
                            }
                        }
                    };

                    if (scope.done) {
                        optionsObj.done = function(e, data) {
                            scope.$apply(function() {
                                scope.done({
                                    e: e,
                                    data: data
                                });
                            });
                        }
                    }

                    if (scope.progress) {
                        optionsObj.progress = function(e, data) {
                            scope.$apply(function() {
                                scope.progress({
                                    e: e,
                                    data: data
                                });
                            });
                        }
                    }

                    // 위의 코드는 fileupload에 들어 있는 모든 API를 커버하게끔
                    // 루프 안에서 간편히 처리할 수도 있다.
                    element.fileupload(optionsObj);
                }
            };
        }
    ]);

});