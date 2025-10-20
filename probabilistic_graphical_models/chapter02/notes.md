## Chapter 2: Foundations
이 chapter의 목적은 해당 분야의 포괄적인 개요를 제공하려는 것이 아니라,
책의 나머지 부분을 이해하는 데 필요한 핵심 아이디어의 최소한의 집합을 소개하는 것이다.

이 장에서는 확률 이론, 정보 이론, 그리고 그래프 이론의 핵심 개념과 관련된 중요한 배경 지식을 다룬다.

그 외의 배경 지식 (ex. 이산 및 연속 최적화, 알고리즘 복잡도 분석, 기본 알고리즘 개념 등)은 특정 주제에 더 밀접하게 연관되어 있다. 이러한 개념들 중 일부는 부록에서 다루며, 일부는 본문 내 concept box에 제시된다.

-- 

### 2.1 확률 이론(Probability Theory)
이 책의 주요 초점은 복잡한 확률 분포(complex probability distributions)에 있으며, 다음은 확률 이론의 기본 개념을 복습하는 내용이다.

#### 2.1.1 확률 분포(Probability Distributions)
**확률**은 불확실한 사건이 일어날 가능성에 대한 신뢰의 정도(degree of confidence)를 의미한다.
이는 특정 사건이 일어날 가능성에 대한 *수치적 표현*이다.

**확률 이론**은 이러한 불확실한 사건들에 대한 추정치를 어떻게 정의하고 계산할 것인지에 대한 *형식적 근거(formal foundation)*와 그들이 따라야 할 *수학적 규칙*을 다루는 학문이다.

##### 2.1.1.1 사건 공간(Event Spaces)
확률을 정의하기 전에 확률을 부여할 사건(event)가 무엇인지 정의해야 한다.
형식적으로, 사건을 정의하기 위해 **가능한 결과들의 공간**이 존재한다고 가정하며, 이 공간을 Ω로 표기한다.  

예를 들어, 주사위를 생각해보면 가능한 모든 결과는
\[Ω = \{1, 2, 3, 4, 5, 6\}\] 이 될 수 있다.  

확률을 부여할 수 있는 사건들의 집합을 정의해야 하며, 이를 **측정 가능한 사건(measurable events)** 의 집합 S로 나타낸다. 
즉, 각 사건 \( \alpha \in S \) 는 Ω의 부분집합이다.
- 주사위의 경우, 사건 `{6}` 은 “주사위가 6이 나오는 경우”를 의미한다.  
- 사건 `{1, 3, 5}` 는 “홀수가 나오는 경우”를 의미한다.  

확률론에서 사건 공간이 되기 위해서는 다음의 세 가지 기본 속성을 만족해야 한다.
1. 공집합(∅)과 전체집합(Ω)을 포함해야 한다.  
2. 합집합(Union)에 대해 닫혀 있어야 한다.  
> 즉, \( \alpha, \beta \in S \) 이면 \( \alpha \cup \beta \in S \) 여야 한다.  
3. 여집합(Complement)에 대해 닫혀 있어야 한다.  
> 즉, \( \alpha \in S \) 이면 \( Ω - \alpha \in S \) 여야 한다.

이러한 두 번째와 세 번째 조건을 만족하면, 사건 공간은 자동으로 교집합(Intersection)과 차집합(Set Difference)같은 다른 boolean 연산에 대해서도 닫혀 있게 된다.

##### 2.1.1.2 Probability Distributions
##### 2.1.1.3 Interpretations of Probability

--

#### 2.1.2 Basic Concepts in Probability
##### 2.1.2.1 Conditional Probability
##### 2.1.2.2 Chain Rule and Bayes Rule

--

#### 2.1.3 Random Variables and Joint Distributions
##### 2.1.3.1 Motivation
##### 2.1.3.2 What Is a Random Variable?
##### 2.1.3.3 Marginal and Joint Distributions
##### 2.1.3.4 Conditional Probability

--

#### 2.1.4 Independence and Conditional Independence
##### 2.1.4.1 Independece
##### 2.1.4.2 Conditional Independence
##### 2.1.4.3 Independence of Random Variables

--

#### 2.1.5 Querying a Distribution
##### 2.1.5.1 Probability Queries
##### 2.1.5.2 MAP Queries
##### 2.1.5.3 Marginal MAP Queries

--

#### 2.1.6 Continous Spaces
##### 2.1.6.1 Probability Density Functions
##### 2.1.6.2 Joint Density Functions
##### 2.1.6.3 Conditional Density Functions

--

#### 2.1.7 Expectation and Variance
##### 2.1.7.1 Expectation
##### 2.1.7.2 Variance

--