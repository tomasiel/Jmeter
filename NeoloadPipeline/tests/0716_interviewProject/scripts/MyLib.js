function writeFile(text)

{
var lock = new java.util.concurrent.locks.ReentrantLock();
var date = context.variableManager.getValue("CurrentDate");

lock.lock();
                                             
var writer = new java.io.FileWriter("C:\\NeoLoad\\OutputFile\\TestFile2.csv",true);

//writer.write(date+";"+context.currentVU.id+";"+ text );

writer.write(date+","+context.currentVU.id+","+text );

writer.write("\r\n");

writer.close();

lock.unlock();

}

// Certainly! In NeoLoad, you can use JavaScript to handle exceptions using try-catch blocks. This can be particularly useful for custom actions or validations within your performance tests. Here's a simple example to illustrate how you can implement a try-catch block in NeoLoad:
// 
// 
// try {
//     // Your code that might throw an exception
//     var response = context.variableManager.getValue("responseVariable");
//     if (response === null) {
//         throw new Error("Response variable is null");
//     }
//     // Process the response
//     context.log.info("Response: " + response);
// } catch (e) {
//     // Handle the exception
//     context.log.error("An error occurred: " + e.message);
//     // Optionally, you can set a variable to indicate an error
//     context.variableManager.setValue("errorOccurred", "true");
// }
