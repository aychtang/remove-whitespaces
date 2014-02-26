import System.Environment
import Data.Char (isSpace)

trim = f . f
   where f = reverse . dropWhile isSpace

main = do
	arguments <- getArgs
	strings <- readFile (arguments !! 0)
	mapM_ putStrLn (filter ((not . null) . trim) (lines(strings)))
