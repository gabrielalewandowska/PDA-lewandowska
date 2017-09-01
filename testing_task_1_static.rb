### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 
def func1 val 
  if val = 1 #should be "==" instead of "=" since it's conditional
  return true #incorrect indentation
  else
  return false
  end
end
  
dif max a b # "def" is misspelt, no comma between variable names
  if a > b
      return a 
  else
  b
  end 
end
end #unnecessary "end"
  
def looper 
  for i in 1..10 
  puts i #incorrect indentation
  end
  # no explicit return, should add "return i"
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 # missing "end"
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 # should be spelt "failures" instead of "failrues"
end

  
if failures # should be limited to only if failures are greater than 0
  puts "Test Failed"
else
  puts "Test Passed"
end


