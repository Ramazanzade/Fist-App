import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection:'row',
        justifyContent:'space-around'
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
      subitem: {
        marginLeft: 24,
        marginBottom: 8,
        flexDirection:'column'
      },
      circle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 8,
      },
      checked: {
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
      },
      container1:{
        flexDirection:'column'
      }

})



  {/* <View style={stayles.container1}>
        <TouchableOpacity style={stayles.item} onPress={handleIncomeCheck}>
          <View style={[stayles.circle, incomeChecked && stayles.checked]} />
          <Text style={stayles.text}>Income</Text>
        </TouchableOpacity>

        {incomeChecked && (
          <View style={stayles.subitem}>
            <Text>Income Data</Text>
          </View>
        )}

      </View>
      <View style={stayles.container1}>
        <TouchableOpacity style={stayles.item} onPress={handleExpenseCheck}>
          <View style={[stayles.circle, expenseChecked && stayles.checked]} />
          <Text style={stayles.text}>Expense</Text>
        </TouchableOpacity>

        {expenseChecked && (
          <View style={stayles.subitem}>
            <Text>Expense Data</Text>
          </View>
        )}
      </View> */}