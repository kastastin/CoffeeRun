formHandler.addSubmitHandler(function (date) {
    try {
        myTruck.createOrder(function (error) {
            if (error) {
                throw new Exception(Error);
            } else {
                try {
                    saveOnServer(function (error) {
                        if (error) {
                            throw new Exception({message: 'server error'});
                        } else {
                            try {
                                checkList.addRow();
                            } catch (e2) {
                                handleerror(e2);
                            }
                        }
                    });
                } catch (e) {
                    handleServerError(e, function () {
                        try {
                            checkList.addRow();
                        } catch (e3) {
                            handleDomError(e3)
                        }
                    });
                }
            }
        });
    } catch (e) {
        console.log('Something bad happened');
    }
});